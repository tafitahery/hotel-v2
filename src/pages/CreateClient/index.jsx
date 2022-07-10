import axios from 'axios';
import React, { useState } from 'react';

const CreateClient = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [idCard, setIdcard] = useState('');
  const [phone, setPhone] = useState('');

  const hanldeSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      address,
      idCard,
      phone,
    };

    axios.post('http://localhost:4000/clients', data).then(() => {
      setFirstName('');
      setLastName('');
      setAddress('');
      setIdcard('');
      setPhone('');
    });
  };

  return (
    <form onSubmit={(e) => hanldeSubmit(e)}>
      <h1>Création d'un client</h1>
      <div>
        <div>
          <label htmlFor="first-name">Prénom</label>
          <input
            type="text"
            id="first-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Nom</label>
          <input
            type="text"
            id="last-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Adresse</label>
          <input
            type="text"
            id="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="id-card">CIN</label>
          <input
            type="text"
            id="id-card"
            required
            value={idCard}
            onChange={(e) => setIdcard(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Valider" />
        </div>
      </div>
    </form>
  );
};

export default CreateClient;
