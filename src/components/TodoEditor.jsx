import { React, useState, useEffect } from 'react';
import Board from "../components/T/board/Board";
import { generateQuoteMap } from '../components/T/mockData';


const TodoEditor = ({boardId}) => {
    const data = {
        medium: generateQuoteMap(5),
        large: generateQuoteMap(500),
    };

    // console.log(data.medium);
      
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