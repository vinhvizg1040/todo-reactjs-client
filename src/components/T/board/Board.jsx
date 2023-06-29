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

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [ordered, setOrdered] = useState([]);

  useEffect(() => {
    getBoard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial])

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

      setOrdered(reorderedorder);

      await instance.post('/board/updateListOfBoardPosition', {
        listIds: reorderedorder,
        board_id: initial
      })
        .catch(error => console.log(error));

      return;
    }


    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    });

    console.log(columns);
    console.log(data.quoteMap);
    setColumns(data.quoteMap);

    await instance.post('/list/UpdateListOfCardsPosition', {
      listCards: data.quoteMap,
      board_id: initial
    })
      .catch(error => console.log(error));
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
                  // quotes={data.find(id => id._id === key).cards}
                  quotes={columns[key]}
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
