import React, { useState, useEffect } from 'react';
import Proptype from 'prop-types';
import { Button } from 'react-bootstrap';

import { getData } from '../../utils/data';
import EditElement from '../EditElement';
import DeleteElement from '../DeleteElement';

const ShowReservation = ({
  id,
  dateIn,
  dateOut,
  clientId,
  roomId,
  setReservations,
}) => {
  const [client, setClient] = useState({});
  const [room, setRoom] = useState({});

  const url = 'http://localhost:4000/reservations';
  const path = '/updateReservation/';

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
        <EditElement id={id} path={path} />{' '}
        <DeleteElement id={id} setElement={setReservations} url={url} />{' '}
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
