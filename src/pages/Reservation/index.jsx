import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/data';

const Reservation = () => {
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [clientId, setClientId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getData('http://localhost:4000/clients').then((res) => setClients(res));
  }, []);

  useEffect(() => {
    getData('http://localhost:4000/rooms').then((res) => setRooms(res));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      dateIn,
      dateOut,
      clientId,
      roomId,
    };

    axios.post('http://localhost:4000/reservations', data).then(() => {
      setDateIn('');
      setDateOut('');
      setClientId('');
      setRoomId('');
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Réservation</h1>
      <div>
        <div>
          <label htmlFor="date-in">Date d'entrée : </label>
          <input
            type="date"
            id="date-in"
            required
            value={dateIn}
            onChange={(e) => setDateIn(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date-out">Date de sortie : </label>
          <input
            type="date"
            id="date-out"
            required
            min={dateIn}
            value={dateOut}
            onChange={(e) => setDateOut(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="client">Client : </label>
          <select
            id="client"
            required
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          >
            <option value=""> --- </option>
            {clients.map(({ id, firstName, lastName }) => (
              <option value={id} key={id}>{`${lastName} ${firstName}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Chambre : </label>
          <select
            id="room"
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
          </select>
        </div>
        <div>
          <input type="submit" value="Valider" />
        </div>
      </div>
    </form>
  );
};

export default Reservation;
