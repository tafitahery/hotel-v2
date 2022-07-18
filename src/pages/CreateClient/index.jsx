import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

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
    <div>
      <h1>Création d'un client</h1>
      <Form onSubmit={(e) => hanldeSubmit(e)}>
        <Form.Group className="mb-3" controlId="first-name">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer prénom"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last-name">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer nom"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Adresse</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer adresse"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="id-card">
          <Form.Label>CIN</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer numero de CIN"
            required
            value={idCard}
            onChange={(e) => setIdcard(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer numero téléphone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
};

export default CreateClient;
