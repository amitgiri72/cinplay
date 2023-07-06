import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

import { BrowserRouter } from "react-router-dom";
import OriginalDetail from "./components/FunctionDetail/OriginalDetail";
import SeriesDetail from "./components/FunctionDetail/SeriesDetail";
import MovieDetail from "./components/FunctionDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/originaldetail" element={<OriginalDetail />} />
          <Route path="/moviedetail" element={<MovieDetail />} />
          <Route path="/seriesdetail" element={<SeriesDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
