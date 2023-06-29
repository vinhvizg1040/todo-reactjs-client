/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import QuoteItem from './item';

const QuoteList = (props) => {
  const {
    isCombineEnabled,
    listId,
    quotes,
    useClone,
  } = props;

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
          <div className='overflow-x-hidden overflow-y-auto min-h-1' ref={dropProvided.innerRef}>
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
            <div className='bg-white text-black w-full mb-3 py-1 pl-2 px-1 rounded-sm cursor-pointer flex justify-between drop-shadow-md group group-hover:stroke-white hover:bg-neutral-100'>
              <div className='text-sm'>+</div>
            </div>
          </div>

        </div>
      )}
    </Droppable>
  );
}
export default QuoteList