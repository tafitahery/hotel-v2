import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

import { getData } from '../../utils/data';

const Reservation = () => {
  const now = new Date(Date.now())
    .toLocaleDateString()
    .split('/')
    .reverse()
    .join('-');

  const [dateIn, setDateIn] = useState(now);
  const [dateOut, setDateOut] = useState('');
  const [clientId, setClientId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [ocuppedRoomId, setOcuppedRoomId] = useState([]);

  useEffect(() => {
    getData('http://localhost:4000/clients').then((res) => setClients(res));
  }, []);

  useEffect(() => {
    getData('http://localhost:4000/rooms').then((res) => {
      let tmp = [];
      if (ocuppedRoomId.length === 0) {
        setRooms(res);
      } else {
        ocuppedRoomId.forEach((id) =>
          res.forEach((elt) => elt.id !== parseInt(id) && tmp.push(elt))
        );
        setRooms(tmp);
      }
    });
  }, [ocuppedRoomId]);

  useEffect(() => {
    getData('http://localhost:4000/reservations').then((res) => {
      setOcuppedRoomId(
        res.reduce(
          (acc, elt) =>
            new Date(elt.dateIn) > new Date(dateIn) ||
            new Date(elt.dateOut) < new Date(dateIn)
              ? acc
              : [...acc, elt.roomId],
          []
        )
      );
    });
  }, [dateIn, dateOut]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      dateIn,
      dateOut,
      clientId,
      roomId,
    };

    axios.post('http://localhost:4000/reservations', data).then(() => {
      setDateIn(now);
      setDateOut('');
      setClientId('');
      setRoomId('');
    });
  };

  return (
    <div className="mt-4 ms-3 me-3">
      <h1>Réservation</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="date-in">
          <Form.Label>Date d'entrée</Form.Label>
          <Form.Control
            type="date"
            min={now}
            max={dateOut}
            required
            value={dateIn}
            onChange={(e) => setDateIn(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date-out">
          <Form.Label>Date de sortie</Form.Label>
          <Form.Control
            type="date"
            min={dateIn}
            required
            value={dateOut}
            onChange={(e) => setDateOut(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="client">
          <Form.Label>Client</Form.Label>
          <Form.Select
            required
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          >
            <option value=""> --- </option>
            {clients.map(({ id, firstName, lastName }) => (
              <option value={id} key={id}>{`${lastName} ${firstName}`}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="room">
          <Form.Label>Chambre</Form.Label>
          <Form.Select
            required
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          >
            <option value=""> --- </option>
            {rooms.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
};

export default Reservation;
