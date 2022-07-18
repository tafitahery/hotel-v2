import React, { useState, useEffect } from 'react';
import Proptype from 'prop-types';
import { Button } from 'react-bootstrap';

import { getData } from '../../utils/data';

const ShowReservation = ({ dateIn, dateOut, clientId, roomId }) => {
  const [client, setClient] = useState({});
  const [room, setRoom] = useState({});

  useEffect(() => {
    getData('http://localhost:4000/clients', clientId).then((res) =>
      setClient(res)
    );
  }, [clientId]);

  useEffect(() => {
    getData('http://localhost:4000/rooms', roomId).then((res) => {
      setRoom(res);
    });
  }, [roomId]);

  const stay = () => {
    const date1 = new Date(dateIn).getTime();
    const date2 = new Date(dateOut).getTime();
    return (date2 - date1) / (1000 * 3600 * 24);
  };

  return (
    <tr>
      <td>{`${client.firstName} ${client.lastName}`}</td>
      <td>{room.name}</td>
      <td>{dateIn}</td>
      <td>{dateOut}</td>
      <td>{stay()}</td>
      <td>Ar {room.price * stay()}</td>
      <td>
        <Button variant="secondary">Editer</Button>{' '}
        <Button variant="danger">Supprimer</Button>{' '}
        <Button variant="primary">Facturer</Button>
      </td>
    </tr>
  );
};

ShowReservation.propTypes = {
  dateIn: Proptype.string.isRequired,
  dateOut: Proptype.string.isRequired,
  clientId: Proptype.string.isRequired,
  roomId: Proptype.string.isRequired,
};

export default ShowReservation;
