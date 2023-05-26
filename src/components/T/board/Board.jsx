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

  const [createName, setCreateName] = useState('');
  const boardId = initial;
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState(data.reduce((lists, card) => {
    let { _id, cards } = card;
    lists[_id] = cards;

    return lists;
  }, {}));
  const [ordered, setOrdered] = useState(data.map(({ _id }) => _id));
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (boardId) {
      getBoard();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial])

  // convertData(data)
  // console.log(initial);
  async function getBoard() {
    await instance.post('/board/getBoardbyId', {
      board_id: initial
    })
      .then(res => {
        if (data !== res.data.lists) {
          //phải convertData trước lhi setData
          convertData(res.data.lists);
          setData(res.data.lists);
        }
      })
      .catch(error => console.log(error));
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

      setOrdered(reorderedorder);
      // console.log(reorderedorder);

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

  };

  const handleCreateClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmitClick = async () => {
    if (createName.trim() !== "") {
      await instance.post('/list/createList', {
        name: createName,
        board_id: boardId
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => console.log(error));
    }
    setShowForm(!showForm);
    setCreateName('');

    getBoard();
  };

  const reloadBoardHandle = () => {
    getBoard();
  }

  const handleChange = (event) => {
    // Update new name value
    setCreateName(event.target.value);
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
                  reloadBoard={reloadBoardHandle}
                  boardId={boardId}
                />
              </div>
            )
            )}
            {provided.placeholder}

            {showForm ? (
              <div className="border-2 bg-gray-200 m-2 p-2 w-64 min-w-64 rounded-sm h-full flex opacity-90">
                <input className='w-full' type="text" value={createName} onChange={handleChange} />
                <button onClick={handleSubmitClick} className='ml-1 hover:bg-gray-300 hover:rounded-sm' type='submit'>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#33363F" strokeWidth="2" />
                    <path d="M8 12L11 15L16 9" stroke="#33363F" strokeWidth="2" />
                  </svg>
                </button>
                <button onClick={handleCreateClick} className='ml-1 hover:bg-gray-300 hover:rounded-sm'>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#33363F" strokeWidth="2" />
                    <path d="M9.0001 14.9997L15.0001 8.99966" stroke="#33363F" strokeWidth="2" />
                    <path d="M15 15L9 9" stroke="#33363F" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            ) :
              (
                <button onClick={handleCreateClick} className="border-2 opacity-30 bg-gray-200 m-2 p-2 w-64 min-w-64 rounded-sm h-full flex-col hover:opacity-90">
                  <div className='text-base'>+ Add more list</div>
                </button>
              )}
          </div>
        )}
      </Droppable>
    </DragDropContext >
  );
};

Board.defaultProps = {
  isCombineEnabled: false,
};

Board.propTypes = {
  isCombineEnabled: PropTypes.bool,
};

export default Board;
