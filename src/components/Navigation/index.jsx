import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/">Reservation</Link>
      <Link to="/listReservations">Liste des réservations</Link>
      <Link to="/createClient">Création Client</Link>
      <Link to="/listClients">Liste des clients</Link>
      <Link to="/createRoom">Création Chambre</Link>
      <Link to="/listRooms">Liste des chambre</Link>
    </div>
  );
};

export default Navigation;
