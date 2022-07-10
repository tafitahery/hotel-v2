import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Reservation</Link>
        </li>
        <li>
          <Link to="/listReservations">Liste des réservations</Link>
        </li>
        <li>
          <Link to="/createClient">Création Client</Link>
        </li>
        <li>
          <Link to="/listClients">Liste des clients</Link>
        </li>
        <li>
          <Link to="/createRoom">Création Chambre</Link>
        </li>
        <li>
          <Link to="/listRooms">Liste des chambre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
