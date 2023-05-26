import { React, useState, useEffect } from 'react';
import Board from "../components/T/board/Board";


const TodoEditor = ({boardId}) => {
      
    return (
        <div className='h-full w-full flex flex-col items-center bg-[#202020] overflow-hidden'>
            <div className='w-11/12 h-full justify-between pt-10 text-black'>
                <Board initial={boardId} withScrollableColumns />
                {/* <Board initial={data.medium} withScrollableColumns /> */}
            </div>
        </div>
    )

}

export default TodoEditor