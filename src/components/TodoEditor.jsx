import { React, useState, useEffect } from 'react';
import Board from "../components/T/board/Board";
import instance from '../api/instance';

const TodoEditor = ({ boardId }) => {
    
    return (
        <div className='h-full w-full flex flex-col items-center overflow-x-auto bg-[#202020]'>
            <div className='w-11/12 justify-between pt-10 text-black'>
                <Board initial={boardId} withScrollableColumns />
                {/* <Board initial={data.medium} withScrollableColumns /> */}
            </div>
        </div>
    )

}

export default TodoEditor