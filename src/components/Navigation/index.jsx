import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Acceuil
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/reservation">
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
  );
};

export default Navigation;
