import { BrowserRouter, Routes, Route } from "react-router-dom";
import Film from "./Page/Film/Film";
import FilmDetails from "./Page/FilmDetails/FilmDetails";
import { MovieContext } from "./context/MovieContent";

function App() {
  console.log("Token dans App:", import.meta.env.VITE_API_TOKEN);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Film />} />
        <Route path="/film/:id" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
