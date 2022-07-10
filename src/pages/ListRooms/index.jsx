import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ShowRoom from '../../components/ShowRoom';

const ListRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/rooms');
        setRooms(data);
      } catch (error) {
        console.log('======= ERROR =======');
      }
    };
    getRooms();
  }, []);

  return (
    <div>
      <h1>Liste des chambres</h1>
      <table>
        <thead>
          <tr>
            <th>Nom du chambre</th>
            <th>Prix / nuit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(({ id, name, price }) => (
            <ShowRoom key={id} name={name} price={price} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListRooms;
