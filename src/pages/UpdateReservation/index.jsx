import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { getData } from '../../utils/data';

const UpdateReservation = () => {
  const now = new Date(Date.now())
    .toLocaleDateString()
    .split('/')
    .reverse()
    .join('-');

  const [reservation, setReservation] = useState({});
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [clientId, setClientId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [availableRoomId, setAvailableRoomId] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getData('http://localhost:4000/reservations', id).then((res) =>
      setReservation(res)
    );
  }, [id]);

  useEffect(() => {
    getData('http://localhost:4000/clients').then((res) => setClients(res));
  }, []);

  useEffect(() => {
    getData('http://localhost:4000/rooms').then((res) => {
      let tmp = [];
      availableRoomId.forEach((id) =>
        res.forEach((elt) => elt.id === parseInt(id) && tmp.push(elt))
      );
      setRooms(tmp);
    });
  }, [availableRoomId]);

  useEffect(() => {
    getData('http://localhost:4000/reservations').then((res) =>
      setAvailableRoomId(
        res.reduce(
          (acc, elt) =>
            (new Date(elt.dateIn) <= new Date(dateIn) &&
              new Date(elt.dateOut) >= new Date(dateIn)) ||
            new Date(elt.dateIn) <= new Date(dateOut)
              ? acc
              : [...acc, elt.roomId],
          []
        )
      )
    );
  }, [dateIn, dateOut]);

  return (
    <div className="mt-4 ms-3 me-3">
      <h1>Modification Réservation</h1>
      <Form>
        <Form.Group className="mb-3" controlId="date-in">
          <Form.Label>Date d'entrée</Form.Label>
          <Form.Control
            type="date"
            min={now}
            required
            defaultValue={reservation.dateIn}
            onChange={(e) => setDateIn(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date-out">
          <Form.Label>Date de sortie</Form.Label>
          <Form.Control
            type="date"
            min={reservation.dateIn}
            required
            defaultValue={reservation.dateOut}
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

export default UpdateReservation;
