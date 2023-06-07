import { React } from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./components/HomePage";
import About from "./pages/About";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
