import { React, useState } from 'react';
import Board from "../components/T/board/Board";
import { generateQuoteMap } from '../components/T/mockData';

const TodoEditor = (props) => {
    const data = {
        medium: generateQuoteMap(3),
        large: generateQuoteMap(500),
    };
    return (
        <div className='h-full w-full flex flex-col items-center bg-[#202020]'>
            <div className='w-11/12 justify-between pt-10 text-black'>
                <Board initial={data.medium} withScrollableColumns />
            </div>
        </div>
    )

}

export default TodoEditor