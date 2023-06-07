import React from "react";
import Test from "../components/Test";
import TodoEditor from "../components/TodoEditor";
import Board from "../components/T/board/Board";
import { generateQuoteMap } from '../components/T/mockData';

const About = () => {
  const data = {
    medium: generateQuoteMap(100),
    large: generateQuoteMap(500),
  };
  // console.log(data.medium);
  return (
    <div>
      {/* <Test/> */}
      {/* <TodoEditor/> */}
      <div className='h-full w-full flex flex-col items-center bg-[#202020] overflow-auto'>
            <div className='w-11/12 flex flex-col justify-between pt-10 text-black'>
              <Board initial={data.medium} withScrollableColumns />
            </div>
      </div>
      

    </div>
  );
};

export default About;
