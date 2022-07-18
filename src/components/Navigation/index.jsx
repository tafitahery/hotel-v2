import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/">Reservation</Link>
    //     </li>
    //     <li>
    //       <Link to="/listReservations">Liste des réservations</Link>
    //     </li>
    //     <li>
    //       <Link to="/createClient">Création Client</Link>
    //     </li>
    //     <li>
    //       <Link to="/listClients">Liste des clients</Link>
    //     </li>
    //     <li>
    //       <Link to="/createRoom">Création Chambre</Link>
    //     </li>
    //     <li>
    //       <Link to="/listRooms">Liste des chambre</Link>
    //     </li>
    //   </ul>
    // </div>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Acceuil</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Réservation
            </Nav.Link>
            <Nav.Link as={Link} to="/listReservations">
              Liste des réservation
            </Nav.Link>
            <Nav.Link as={Link} to="/createClient">
              Création Client
            </Nav.Link>
            <Nav.Link as={Link} to="/listClients">
              Liste des client
            </Nav.Link>
            <Nav.Link as={Link} to="/createRoom">
              Création Chambre
            </Nav.Link>
            <Nav.Link as={Link} to="/listRooms">
              Liste des chambres
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
