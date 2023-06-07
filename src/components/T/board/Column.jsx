import React from "react";
import { Draggable } from "react-beautiful-dnd";
import QuoteList from "../styles/list";


const Column = (props) => {
  const title = props.title;
  const quotes = props.quotes;
  const index = props.index;
  const key = props.id;

  // console.log(quotes);

  return (
    <Draggable draggableId={key} index={index}>
      {(provided, snapshot) => (
        <div className="border-2 bg-gray-200 m-2 p-2 w-64 min-w-64 rounded-sm h-full flex-col" ref={provided.innerRef} {...provided.draggableProps}>
          <div className="text-base py-1 px-1 flex justify-between"
            {...provided.dragHandleProps}
          >
            <div className="">
              <p>{title}</p>
            </div>
            <button className="self-center px-1 hover:bg-gray-300 h-5 w-8 hover:rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 22">
                <g fill="black" stroke="currentColor" strokeLinecap="round" transform="translate(3 10)">
                  <circle cx="2" cy="2" r="2"></circle>
                  <circle cx="9" cy="2" r="2"></circle>
                  <circle cx="16" cy="2" r="2"></circle>
                </g>
              </svg>
            </button>
          </div>
          <QuoteList
            listId={key}
            quotes={quotes}
            isCombineEnabled={Boolean(props.isCombineEnabled)}
            useClone={Boolean(props.useClone)}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Column;
