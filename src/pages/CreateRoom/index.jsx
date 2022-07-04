import React, { useState } from 'react';

const CreateRoom = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  return (
    <div>
      <h1>Création d'un chambre</h1>
      <div>
        <div>
          <label htmlFor="name">Nom Chambre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Prix</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <button>Valider</button>
          <button
            onClick={() => {
              setName('');
              setPrice(0);
            }}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
