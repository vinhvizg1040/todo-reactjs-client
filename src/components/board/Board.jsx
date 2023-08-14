// @flow
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Column from './Column';
import reorder, { reorderQuoteMap } from './reorder';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import instance from '../../api/instance';

const Board = ({
  isCombineEnabled,
  initial,
  useClone,
  containerHeight,
}) => {

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [ordered, setOrdered] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    getBoard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial, isUpdated])

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

  const handleEditList = async (newName, key) => {
    await instance.put('/list/updateListById', {
      board_id: initial,
      list_id: key,
      name: newName
    })
      .catch(error => console.log(error));
  }

  const handleDeleteClick = async (key) => {
    console.log(key);
    // delete List Of Board
  }

  if (!columns || !ordered || !data) {
    return (<div>Loading...</div>);
  }

  return (
    <div className='flex px-8'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="board"
          type="COLUMN"
          direction="horizontal"
          mode="virtual"
          ignoreContainerClipping={Boolean(containerHeight)}
          isCombineEnabled={isCombineEnabled}
        >
          {(provided) => (
            <div
              className='flex flex-wrap'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {ordered.map((key, index) =>
              (
                <div className='pb-4 w-64 mr-8' key={key}>
                  <Column
                    id={key}
                    index={index}
                    title={data.find(id => id._id === key).name}
                    quotes={columns[key]}
                    isCombineEnabled={isCombineEnabled}
                    useClone={useClone}
                    handleEditList={handleEditList}
                    handleDeleteClick={handleDeleteClick}
                  />
                </div>
              )
              )}
              {provided.placeholder}
              <button className='border-2 bg-gray-200 m-2 p-2 w-64 rounded-sm h-10 flex-col hover:bg-gray-300'>+ Add More</button>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

Board.defaultProps = {
  isCombineEnabled: false,
};

Board.propTypes = {
  isCombineEnabled: PropTypes.bool,
};

export default Board;
