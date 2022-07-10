import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Reservation = () => {
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [client, setClient] = useState('');
  const [room, setRoom] = useState('');
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/clients');
        setClients(data);
      } catch (error) {
        console.log('====== ERROR ======');
      }
    };
    getClients();
  }, []);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/rooms');
        setRooms(data);
      } catch (error) {
        console.log('====== ERROR ======');
      }
    };
    getRooms();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      dateIn,
      dateOut,
      client,
      room,
    };

    axios.post('http://localhost:4000/reservations', data).then(() => {
      setDateIn('');
      setDateOut('');
      setClient('');
      setRoom('');
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
            value={dateIn}
            onChange={(e) => setDateIn(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date-out">Date de sortie : </label>
          <input
            type="date"
            id="date-out"
            min={dateIn}
            value={dateOut}
            onChange={(e) => setDateOut(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="client">Client : </label>
          <select
            id="client"
            value={client}
            onChange={(e) => setClient(e.target.value)}
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
            value={room}
            onChange={(e) => setRoom(e.target.value)}
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
