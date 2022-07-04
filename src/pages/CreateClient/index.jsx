import React, { useState } from 'react';

const CreateClient = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [idCard, setIdcard] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <h1>Création d'un client</h1>
      <div>
        <div>
          <label htmlFor="first-name">Prénom</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Nom</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Adresse</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="id-card">CIN</label>
          <input
            type="text"
            id="id-card"
            value={idCard}
            onChange={(e) => setIdcard(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Téléphone</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <button>Valider</button>
          <button
            onClick={() => {
              setFirstName('');
              setLastName('');
              setAddress('');
              setIdcard('');
              setPhone('');
            }}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
