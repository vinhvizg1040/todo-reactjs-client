import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import QuoteList from "./styles/list";


const Column = (props) => {
  const title = props.title;
  const quotes = props.quotes;
  const index = props.index;
  const key = props.id;

  const [isOpen, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(title);

  // console.log(quotes);
  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const handleChange = (event) => {
    // Update new name value
    setNewName(event.target.value);
  };

  const handleEditClick = () => {
    // Open editing mode
    setEditing(true);
    setOpen(false);
  };

  const handleSubmitClick = () => {
    setEditing(false);
    setOpen(false);
    props.handleEditList(newName, key);
  }

  const handleDeleteClick = () => {
    props.handleDeleteClick(key);
  }

  return (
    <Draggable draggableId={key} index={index}>
      {(provided, snapshot) => (
        <div className="border-2 bg-gray-300 m-2 p-4 w-64 min-w-64 rounded-sm h-full flex-col" ref={provided.innerRef} {...provided.draggableProps}>
          <div className="text-base py-1 px-1 flex justify-between"
            {...provided.dragHandleProps}
          >
            {editing ?
              (
                <div className='flex w-full'>
                  <input className='leading-5 pl-2 font-light w-full' type="text" value={newName} onChange={handleChange} />
                  <button onClick={handleSubmitClick} className='flex px-1 hover:bg-gray-400 hover:rounded-md place-items-center'>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2" />
                      <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" />
                    </svg>
                  </button>
                </div>

              )
              : (
                <div className="leading-5 pl-2 font-light w-full">
                  <p>{newName}</p>
                </div>
              )
            }


            <div className="flex static">
              <button onClick={handleDropDown} className='self-center px-1 hover:bg-gray-300 h-5 w-8 hover:rounded-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 22">
                  <g fill="black" stroke="currentColor" strokeLinecap="round" transform="translate(3 10)">
                    <circle cx="2" cy="2" r="2"></circle>
                    <circle cx="9" cy="2" r="2"></circle>
                    <circle cx="16" cy="2" r="2"></circle>
                  </g>
                </svg>
              </button>
              <div
                className={`bg-slate-50 flex-row justify-between ml-7 rounded-md z-10 w-14 h-14 text-xs drop-shadow-md ${isOpen ? "absolute" : "hidden"
                  }`}
              >
                <div className="px-2 py-1.5 hover:bg-gray-500 rounded-sm">
                  <button onClick={handleEditClick}>
                    Edit
                  </button>
                </div>
                <div className="bg-slate-200 w-full h-[1px]"></div>
                <div className="px-2 py-1.5 hover:bg-gray-500 rounded-sm">
                  <button onClick={handleDeleteClick}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
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
