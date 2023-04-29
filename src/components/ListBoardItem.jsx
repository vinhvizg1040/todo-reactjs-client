import React, { useState } from 'react'
import instance from '../api/instance';

const BoardItem = (props) => {

    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(props.board.name);

    const onRemoveBoard = async () => {
        await instance.delete('/board/deleteBoardbyId',
            {
                data: { board_id: props.board._id }
            })
            .catch(error => console.log(error));
    }

    const handleEditClick = () => {
        // Open editing mode
        setEditing(true);
    };

    const handleChange = (event) => {
        // Update new name value
        setNewName(event.target.value);
    };

    const handleSubmitClick = async () => {
        if (newName !== props.board.name) {
            await instance.put('/board/updateBoardbyId', {
                board_id: props.board._id,
                name: newName
            }).catch(error => console.log(error));
        }
        setEditing(false);
    };

    return (
        <div className='flex h-9 py-1 px-4 text-sm'>

            {editing ?
                (
                    <div className='flex px-2 py-1 w-full'>
                        <input className='bg-[#363636] leading-5 pl-2 font-extralight w-11/12' type="text" value={newName} onChange={handleChange} />
                    </div>
                )
                : (
                    <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                        <p className='leading-5 pl-2 font-extralight'>{props.board.name}</p>
                    </button>
                )}

            {editing ?
                (
                    <button onClick={handleSubmitClick} className='flex px-1 py-1 mx-1 hover:bg-gray-500 hover:rounded-sm'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
                            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" />
                        </svg>
                    </button>
                )
                : (
                    <button onClick={handleEditClick} className='flex px-1 py-1 mx-1 hover:bg-gray-500 hover:rounded-sm'>
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.204 7.796L16 6C16.5452 5.45475 16.8179 5.18213 16.9636 4.88803C17.2409 4.32848 17.2409 3.67152 16.9636 3.11197C16.8179 2.81788 16.5452 2.54525 16 2C15.4547 1.45475 15.1821 1.18213 14.888 1.03639C14.3285 0.759107 13.6715 0.759107 13.112 1.03639C12.8179 1.18213 12.5452 1.45475 12 2L10.1813 3.81866C11.1452 5.46925 12.5314 6.84482 14.204 7.796ZM8.72689 5.27311L1.85638 12.1436C1.43132 12.5687 1.21879 12.7812 1.07905 13.0423C0.939318 13.3034 0.880373 13.5981 0.762483 14.1876L0.147087 17.2646C0.0805645 17.5972 0.0473034 17.7635 0.141911 17.8581C0.236519 17.9527 0.402825 17.9194 0.735435 17.8529L3.81241 17.2375C4.40187 17.1196 4.69659 17.0607 4.95769 16.9209C5.21879 16.7812 5.43132 16.5687 5.85638 16.1436L12.7458 9.25422C11.1241 8.23857 9.75243 6.87627 8.72689 5.27311Z" fill="white" />
                        </svg>
                    </button>
                )}

            <button onClick={onRemoveBoard} className='flex px-1 py-1 mx-1 hover:bg-gray-500 hover:rounded-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg>
            </button>
        </div>
    )
}

export default BoardItem