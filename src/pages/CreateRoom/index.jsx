import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CreateRoom = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      price: parseInt(price),
      isReserved: false,
    };

    axios.post('http://localhost:4000/rooms', data).then(() => {
      setName('');
      setPrice(0);
    });
  };

  return (
    <div className="mt-4 ms-3 me-3">
      <h1>Création d'un chambre</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nom Chambre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer nom chambre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Prix</Form.Label>
          <Form.Control
            type="number"
            placeholder="Entrer prix/nuit"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
};

export default CreateRoom;
