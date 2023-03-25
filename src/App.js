import { React } from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
