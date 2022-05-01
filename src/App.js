import { Routes, Route } from "react-router-dom";
import MainFilm from "./components/MainFilm";

import Header from "./components/Header";
import FilmInfo from "./components/FilmInfo";
import Favorits from "./components/Favorits";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainFilm />} />
        <Route path="/favorits" element={<Favorits />} />
        <Route path="/film/:id" element={<FilmInfo />} />
      </Routes>
    </div>
  );
}

export default App;
