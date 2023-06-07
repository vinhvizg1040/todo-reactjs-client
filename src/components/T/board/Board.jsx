// @flow
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Column from './Column';
import reorder, { reorderQuoteMap } from '../reorder';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import instance from '../../../api/instance';

const Board = ({
  isCombineEnabled,
  initial,
  useClone,
  containerHeight,
}) => {

  // const [columns, setColumns] = useState(initial);
  // const [ordered, setOrdered] = useState(Object.keys(initial));


  // const [data, setData] = useState([]);
  // const [columns, setColumns] = useState([]);
  // const [ordered, setOrdered] = useState([]);

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState(data.reduce((lists, card) => {
    let { _id, cards } = card;
    lists[_id] = cards;

    return lists;
  }, {}));
  const [ordered, setOrdered] = useState(data.map(({ _id }) => _id));

  useEffect(() => {
    getBoard();
  })

  // convertData(data)
  // console.log(initial);

  async function getBoard() {
    if (initial) {
      await instance.post('/board/getBoardbyId', {
        board_id: initial
      })
        .then(res => {
          //phải convertData trước lhi setData
          convertData(res.data.lists);
          setData(res.data.lists);
        })
        .catch(error => console.log(error));
    }
  }

  function convertData(data) {

    setOrdered(data.map(({ _id }) => _id));
    setColumns(data.reduce((lists, card) => {
      let { _id, cards } = card;
      lists[_id] = cards;

      return lists;
    }, {}));

    // console.log(data.reduce((acc, user) => {
    //   let { _id, name, cards } = user;
    //   acc[_id] = cards;

    //   return acc;
    // }, {}));
  }

  const onDragEnd = async (result) => {
    if (result.combine) {
      if (result.type === 'COLUMN') {
        const shallow = [...ordered];
        shallow.splice(result.source.index, 1);
        setOrdered(shallow);
        return;
      }

      const column = columns[result.source.droppableId];
      const withQuoteRemoved = [...column];

      withQuoteRemoved.splice(result.source.index, 1);

      const orderedColumns = {
        ...columns,
        [result.source.droppableId]: withQuoteRemoved,
      };

      setColumns(orderedColumns);
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === 'COLUMN') {
      const reorderedorder = reorder(ordered, source.index, destination.index);

      // setOrdered(reorderedorder);

      instance.post('/board/updateListOfBoardPosition', {
        listIds: reorderedorder,
        board_id: initial
      })
        .then(res => {
          // setData(res.data.lists);
          // convertData(data)
          // console.log(res.data);
        })
        .catch(error => console.log(error));

      return;
    }


    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    });

    setColumns(data.quoteMap);
    //update listOfCardsPosition
  };


  if (!columns || !ordered || !data) {
    return (<div>Loading...</div>);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
        isCombineEnabled={isCombineEnabled}
      >
        {(provided) => (
          <div
            className='flex'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {ordered.map((key, index) =>
            (
              <div key={key}>
                <Column
                  id={key}
                  index={index}
                  title={data.find(id => id._id === key).name}
                  quotes={data.find(id => id._id === key).cards}
                  isCombineEnabled={isCombineEnabled}
                  useClone={useClone}
                />
              </div>
            )
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

Board.defaultProps = {
  isCombineEnabled: false,
};

Board.propTypes = {
  isCombineEnabled: PropTypes.bool,
};

export default Board;
