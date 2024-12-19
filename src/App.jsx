import { BrowserRouter, Routes, Route } from "react-router-dom";
import Film from "./Page/Film/Film";
import FilmDetails from "./Page/FilmDetails/FilmDetails";
import UsersFilms from "./Page/UsersFilms/UsersFilms";
import { MovieController } from "./context/MovieContent";
import { MovieDetails } from "./context/MovieDetails";
import { UsersFilmsController } from "./context/UsersFilmsContext";
import Navbar from "./Component/Navigation/Navbar";

function App() {
  return (
    <MovieController>
      <MovieDetails>
        <UsersFilmsController>
          <BrowserRouter basename="/Semaine2React">
            <Navbar />
            <Routes>
              <Route path="/" element={<Film />} />
              <Route path="/film/:id" element={<FilmDetails />} />
              <Route path="/usersfilms" element={<UsersFilms />} />
            </Routes>
          </BrowserRouter>
        </UsersFilmsController>
      </MovieDetails>
    </MovieController>
  );
}

export default App;
