import React from "react";
import { Draggable } from "react-beautiful-dnd";
import QuoteList from "../styles/list";


const Column = (props) => {
  const title = props.title;
  const quotes = props.quotes;
  const index = props.index;
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <div className="border-2 bg-gray-300 m-2 p-2 w-64 rounded-sm h-full flex-col" ref={provided.innerRef} {...provided.draggableProps}>
          <div className="text-base py-1 h-10"
              {...provided.dragHandleProps}
            >
              {title}
          </div>
          <QuoteList
            listId={title}
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
