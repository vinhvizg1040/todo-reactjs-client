import { React, useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import NavbarMenu from '../components/NavbarBoard/NavbarMenu';
import TodoEditor from "../components/TodoEditor";
import instance from '../api/instance';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Todo() {
  const [isShown, setIsShown] = useState(true);
  const [toShown, setToShown] = useState(false);
  const [boardId, setBoardId] = useState(null);

  const { user: currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    getBoardId();
  }, [])

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  })

  async function getBoardId() {
    await instance.get('/board/getFirstBoard')
      .then(res => {
        setBoardId(res.data._id);
      })
      .catch(error => {
        console.log(error)
      });
  }
  const navHandle = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
    if (isShown === true) {
      // const window_size = window.innerWidth;
      // if (window_size > 720) {
      //     setToShown(true);
      //     console.log(window_size);
      // }else{
      //     setToShown(false);
      // }
      setToShown(false);
    } else {
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


  const getBoardHandle = (boardId) => {
    setBoardId(boardId);
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar navHandle={navHandle} />
      {/* <Navbar/> */}
      <div className="flex flex-row w-full h-full">
        {isShown ? <NavbarMenu getBoardHandle={getBoardHandle} hidden='w-full' /> : <NavbarMenu hidden='w-0' />}
        {toShown ? <TodoEditor boardId={boardId} hidden='leading-5' /> : <TodoEditor boardId={boardId} />}
      </div>
    </div>
  )
}

export default Todo