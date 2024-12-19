import NavBarRedirection, { NavLink } from "./NavBarRedirection"

const Navbar = () => {
  return (
    <NavBarRedirection>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/usersfilms">Films des utilisateurs</NavLink>
    </NavBarRedirection>
  )
}

export default Navbar