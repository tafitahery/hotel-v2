import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import ShowReservation from '../../components/ShowReservation';
import { getData } from '../../utils/data';

const ListReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getData('http://localhost:4000/reservations').then((res) =>
      setReservations(res)
    );
  }, []);

  return (
    <div>
      <h1>Liste des réservations</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Client</th>
            <th>Chambre</th>
            <th>Date entrée</th>
            <th>Date sortie</th>
            <th>Sejour</th>
            <th>Prix</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(({ id, dateIn, dateOut, clientId, roomId }) => (
            <ShowReservation
              key={id}
              dateIn={dateIn}
              dateOut={dateOut}
              clientId={clientId}
              roomId={roomId}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListReservations;
