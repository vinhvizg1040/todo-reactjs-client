import {React, useState} from 'react'
import Navbar from "../components/Navbar";
import NavbarMenu from '../components/NavbarBoard/NavbarMenu';
import TodoEditor from "../components/TodoEditor";

function Todo() {
    const [isShown, setIsShown] = useState(true);    
    const [toShown, setToShown] = useState(false);

    const navHandle = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);
        if(isShown === true){
          // const window_size = window.innerWidth;
          // if (window_size > 720) {
          //     setToShown(true);
          //     console.log(window_size);
          // }else{
          //     setToShown(false);
          // }
          setToShown(false);
        }else{
          // const window_size = window.innerWidth;
          // if (window_size > 1040) {
          //     setToShown(true);
          //     console.log(window_size);
          // }else{
          //     setToShown(false);
          // }
          setToShown(true);
        }
    };

    // window.addEventListener("resize", () => {
    //     const editors_zie = document.getElementById('todoEdit').offsetWidth;
    //     if (editors_zie < 720) {
    //     setToShown(false);
    //     } else {
    //     setToShown(true);
    //     }
    // });

  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar navHandle={navHandle}/>
      {/* <Navbar/> */}
      <div className="flex flex-row w-full h-full">
        {isShown ? <NavbarMenu hidden='w-full'/> : <NavbarMenu hidden='w-0'/>}
        {toShown ? <TodoEditor hidden='leading-5'/> : <TodoEditor/>}
      </div>
    </div>
  )
}

export default Todo