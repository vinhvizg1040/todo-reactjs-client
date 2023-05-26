import { React, useRef, useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import QuoteList from "../styles/list";
import instance from '../../../api/instance';

const Column = (props) => {
  const title = props.title;
  const quotes = props.quotes;
  const index = props.index;
  const key = props.id;
  const reloadBoard = props.reloadBoard;
  const boardId = props.boardId;

  const [isOpen, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState(props.title);
  let menuRef = useRef();


  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const handleChange = (event) => {
    // Update new name value
    setNewName(event.target.value);
  };

  const handleUpdateClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmitClick = async () => {
    if (newName.trim() !== "") {
      await instance.put('/list/updateListById', {
        name: newName,
        board_id: boardId,
        list_id: key
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => console.log(error));
    }
    setShowForm(!showForm);
    setNewName(newName);
    reloadBoard();
  }

  const handleDeleteClick = async () => {
    await instance.delete('/list/deleteListById', {
      data: {
        board_id: boardId,
        list_id: key
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    // console.log({
    //   board_id: boardId,
    //   list_id: key
    // });
    reloadBoard();
  }

  return (
    <Draggable draggableId={key} index={index}>
      {(provided, snapshot) => (
        <div className="border-2 bg-gray-200 m-2 p-2 w-64 min-w-64 rounded-sm h-full flex-col" ref={provided.innerRef} {...provided.draggableProps}>
          <div className="text-base py-1 px-1 flex justify-between" ref={menuRef}
            {...provided.dragHandleProps}
          >
            {showForm ? (
              <div className="flex mb-2">
                <input className="w-44 px-2" type="text" value={newName} onChange={handleChange} />
                <button onClick={handleSubmitClick} className='ml-1 hover:bg-gray-300 hover:rounded-sm' type='submit'>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#33363F" strokeWidth="2" />
                    <path d="M8 12L11 15L16 9" stroke="#33363F" strokeWidth="2" />
                  </svg>
                </button>
                <button onClick={handleUpdateClick} className='ml-1 hover:bg-gray-300 hover:rounded-sm'>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#33363F" strokeWidth="2" />
                    <path d="M9.0001 14.9997L15.0001 8.99966" stroke="#33363F" strokeWidth="2" />
                    <path d="M15 15L9 9" stroke="#33363F" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            ) :
              (
                <div className="flex justify-between w-full">
                  <div className="">
                    <p>{title}</p>
                  </div>
                  <div className="flex-col">
                    <button onClick={handleDropDown} className=" relative self-center px-2 hover:bg-gray-300 h-5 w-8 hover:rounded-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 22">
                        <g fill="black" stroke="currentColor" strokeLinecap="round" transform="translate(3 10)">
                          <circle cx="2" cy="2" r="2"></circle>
                          <circle cx="9" cy="2" r="2"></circle>
                          <circle cx="16" cy="2" r="2"></circle>
                        </g>
                      </svg>
                    </button>
                    <div
                      className={`bg-white -my-2 rounded z-10 w-26 text-xs ${isOpen ? "absolute" : "hidden"
                        }`}
                    >
                      <div className="px-3 py-1 hover:bg-gray-100">
                        <button onClick={handleUpdateClick}>
                          Rename
                        </button>
                      </div>
                      <div className="px-3 py-1 hover:bg-gray-100">
                        <button onClick={handleDeleteClick}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )}


          </div>
          <QuoteList
            listId={key}
            quotes={quotes}
            isCombineEnabled={Boolean(props.isCombineEnabled)}
            useClone={Boolean(props.useClone)}
            reloadBoard={reloadBoard}
            boardId={boardId}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Column;
