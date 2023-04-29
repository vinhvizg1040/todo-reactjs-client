import { React, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BoardItem from './BoardItem';


const TodoEditor = (props) => {
    const [schema, setSchema] = useState([
        {
            id: "123",
            type: "a",
            text: "123-text"
        },
        {
            id: "345",
            type: "b",
            text: "345-text"
        },
        {
            id: "567",
            type: "a",
            text: "567-text"
        },
        {
            id: "789",
            type: "b",
            text: "789-text"
        },
        {
            id: "101",
            type: "b",
            text: "101-text"
        }
        ,
        {
            id: "102",
            type: "b",
            text: "102-text"
        }
    ]);

    // const [disableFlipMove, setDisableFlipMove] = useState(false);

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        // reorder using index of source and destination.
        const schemaCopy = schema.slice();
        const [removed] = schemaCopy.splice(result.source.index, 1);
        // put the removed one into destination.
        schemaCopy.splice(result.destination.index, 0, removed);

        console.log(result);

        setSchema(schemaCopy);
    };

    const grid = 6;

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: grid * 2,
        margin: `0 ${grid * 2}px 0 0`,

        // change background colour if dragging
        background: isDragging ? "lightgreen" : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = (isDraggingOver) => ({
        // background: isDraggingOver ? "lightblue" : "lightgrey",
        display: "flex",
        padding: grid,
    });
    return (

        <div className='h-full w-full flex flex-col items-center bg-[#202020] overflow-auto'>
            <div className='w-11/12 flex flex-col justify-between pt-10'>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="column1" direction="horizontal">
                        {(provided, snap) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={getListStyle(snap.isDraggingOver)}
                                {...provided.droppableProps}
                            >
                                {schema.map((it, i) => (
                                    <Draggable
                                        key={it.id}
                                        draggableId={it.id}
                                        index={i}
                                    >
                                        {(provided, snap) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snap.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                <BoardItem it={it} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )
}

export default TodoEditor