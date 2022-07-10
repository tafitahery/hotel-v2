import axios from 'axios';
import React, { useState } from 'react';

const CreateRoom = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      price: parseInt(price),
    };

    axios.post('http://localhost:4000/rooms', data).then(() => {
      setName('');
      setPrice(0);
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Création d'un chambre</h1>
      <div>
        <div>
          <label htmlFor="name">Nom Chambre</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Prix</label>
          <input
            type="number"
            id="price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Valider" />
        </div>
      </div>
    </form>
  );
};

export default CreateRoom;
