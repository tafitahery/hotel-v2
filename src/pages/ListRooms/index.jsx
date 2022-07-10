import React, { useState, useEffect } from 'react';
import ShowRoom from '../../components/ShowRoom';
import { getData } from '../../utils/data';

const ListRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getData('http://localhost:4000/rooms').then((res) => setRooms(res));
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
