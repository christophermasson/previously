import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MySerie from "./components/MySerie";
import DetailSerie from "./components/DetailSerie";
import AddSerie from "./components/AddSerie";
import Friends from "./pages/Friends";
import Bloquer from "./components/Bloquer";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="main">
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myserie" element={<MySerie />} />
          <Route path="/home/:id" element={<DetailSerie />} />
          <Route path="/add/:id" element={<AddSerie />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/bloquer/:id" element={<Bloquer />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
