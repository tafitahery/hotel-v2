import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

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
    getData('http://localhost:4000/rooms').then((res) => setRooms(res));
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      dateIn: dateIn ? dateIn : reservation.dateIn,
      dateOut: dateOut ? dateOut : reservation.dateOut,
      clientId: clientId ? clientId : reservation.clientId,
      roomId: roomId ? roomId : reservation.roomId,
    };

    axios.put('http://localhost:4000/reservations/' + id, data);

    navigate('/listReservations');
  };

  return (
    <div className="mt-4 ms-3 me-3">
      <h1>Modification Réservation</h1>
      <Form onSubmit={handleSubmit}>
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
            value={clientId ? clientId : reservation.clientId}
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
            value={roomId ? roomId : reservation.roomId}
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

export default UpdateReservation;
