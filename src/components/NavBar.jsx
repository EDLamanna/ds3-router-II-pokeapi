import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const handleNavBar = ({ isActive }) =>
    isActive ? "navBar active" : "navBar";

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            className="logo"
            src="./src/assets/imgs/brand.png"
            alt="Logo_Pokemon"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={handleNavBar} to="/">
              Home
            </NavLink>
            <NavLink className={handleNavBar} to="/pokemones">
              Pokemones
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
