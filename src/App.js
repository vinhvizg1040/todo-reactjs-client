import { React } from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Todo from "./pages/Todo";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
