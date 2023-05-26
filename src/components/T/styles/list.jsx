/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import QuoteItem from './item';
import instance from '../../../api/instance';

const QuoteList = (props) => {
  const {
    isCombineEnabled,
    listId,
    quotes,
    useClone,
    reloadBoard,
    boardId,
  } = props;
  const [createName, setCreateName] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleCreateClick = () => {
    setShowForm(!showForm);
  };

  const handleChange = (event) => {
    // Update new name value
    setCreateName(event.target.value);
  };

  const handleSubmitClick = async () => {
    if (createName.trim() !== "") {
      await instance.post('/card/createCard', {
        name: createName,
        board_id: boardId,
        list_id: listId
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => console.log(error));
    }
    setShowForm(!showForm);
    setCreateName('')
    reloadBoard();
  };


  return (
    <Droppable
      droppableId={listId}
      isCombineEnabled={isCombineEnabled}
      renderClone={
        useClone
          ? (provided, snapshot, descriptor) => (
            <QuoteItem
              quote={quotes[descriptor.source.index]}
              provided={provided}
              isDragging={snapshot.isDragging}
              isClone
            />
          )
          : null
      }
    >
      {(dropProvided, dropSnapshot) => (
        <div
          {...dropProvided.droppableProps}
        >
          <div className='overflow-x-hidden overflow-y-auto max-h-60 min-h-1' ref={dropProvided.innerRef}>
            {quotes.map((quote, index) => (
              <Draggable key={quote._id} draggableId={quote._id} index={index}>
                {(dragProvided, dragSnapshot) => (
                  <QuoteItem
                    key={quote._id}
                    quote={quote}
                    provided={dragProvided}
                  />
                )}
              </Draggable>
            ))
            }
            {dropProvided.placeholder}
          </div>
          {showForm ? (
            <div className="bg-white text-black w-full mb-3 py-1 pl-2 px-1 rounded-sm cursor-pointer flex justify-between drop-shadow-md">
              <input className='w-full' type="text" value={createName} onChange={handleChange} />
              <button onClick={() => { handleSubmitClick() }} className='ml-1 hover:bg-gray-300 hover:rounded-sm' type='submit'>
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
              <div onClick={handleCreateClick} className='bg-white text-black w-full mb-3 py-1 pl-2 px-1 rounded-sm cursor-pointer flex justify-between drop-shadow-md group group-hover:stroke-white hover:bg-neutral-100'>
                <div className='text-sm'>+</div>
              </div>
            )}

        </div>
      )}
    </Droppable>
  );
}
export default QuoteList