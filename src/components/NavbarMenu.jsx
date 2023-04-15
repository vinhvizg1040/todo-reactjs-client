import React, { useEffect, useState } from 'react'
import axios from 'axios';

const NavbarMenu = (props) => {

    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
    };

    const onRemoveBoard = (board_id) => {
        axios.delete('http://localhost:3001/board/deleteBoardbyId', { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }, data: { board_id: board_id } })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        axios.get('http://localhost:3001/board/getUserBoards', { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {
                setData(res.data.board);
            })
            .catch(error => console.log(error));
    });

    return (
        <>
            <div className={`h-full transition-all pt-4 duration-500 ease-linear max-w-xs flex-col items-center text-[#FFFFFF] not-italic bg-[#242424] ${props.hidden}`}>
                <div className='flex pt-5 pb-1 px-6'>
                    <div className='w-full items-start'>
                        <p className='leading-5 pl-2 font-bold'>Your Boards</p>
                    </div>
                    <div className='flex w-full basis-1/5'>
                        <button className='flex px-2 hover:bg-gray-500 hover:rounded-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22"><g fill="none" stroke="currentColor" strokeLinecap="round" transform="translate(3 10)"><circle cx="2" cy="2" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="16" cy="2" r="2"></circle></g></svg>
                        </button>
                        <button onClick={handleClick} className='flex px-2 py-1 hover:bg-gray-500 hover:rounded-sm'>
                            {showForm ? (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg className='fill-white' width="12" height="12" viewBox="0 0 12 13"><path d="M 6 6 V 0.5 A 0.5 0.5 90 0 1 7 0.5 V 6 H 12.5 A 0.5 0.5 90 1 1 12.5 7 H 7 V 12.5 A 0.5 0.5 90 1 1 6 12.5 V 7 H 0.5 A 0.5 0.5 90 0 1 0.5 6 H 6 Z" fill="current" fillRule="evenodd"></path></svg>
                            )}
                        </button>
                    </div>
                </div>
                {showForm && (
                    <div className='flex py-2 px-6'>
                        <input className='bg-[#363636] w-full' type="text" />
                        <button className='mx-1 hover:bg-gray-500 hover:rounded-sm' type='submit'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <path d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                )}
                <div className='bg-[#FFFF] w-auto h-px rounded-md mx-4 my-2 mb-4'></div>
                {data.map(board =>
                    <div key={board.board_id} className='flex py-1 px-4'>
                        <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                            <p className='leading-5 pl-2 font-extralight'>{board.name}</p>
                        </button>
                        <button onClick={() => onRemoveBoard(board.board_id)} className='flex px-1 py-1 mx-3 hover:bg-gray-500 hover:rounded-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg>
                        </button>
                    </div>
                )}
            </div>

        </>
    )
}

export default NavbarMenu