import React, { useState } from 'react';

const Reservation = () => {
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [client, setClient] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
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
          </select>
        </div>
        <div>
          <label
            htmlFor="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            Chambre :{' '}
          </label>
          <select id="room">
            <option value=""> --- </option>
          </select>
        </div>
        <div>
          <button>Valider</button>
          <button
            onClick={() => {
              setDateIn('');
              setDateOut('');
              setClient('');
              setRoom('');
            }}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
