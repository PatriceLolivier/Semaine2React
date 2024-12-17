import { BrowserRouter, Routes, Route } from "react-router-dom";
import Film from "./Page/Film/Film";
import FilmDetails from "./Page/FilmDetails/FilmDetails";

function App() {
  return (
    <BrowserRouter basename="/Semaine2React">
      <Routes>
        <Route path="/" element={<Film />} />
        <Route path="/film/:id" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
