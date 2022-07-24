import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Input from '../../components/Input';

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
        <Input
          type="text"
          label="nom chambre"
          value={name}
          setValue={setName}
        />
        <Input type="number" label="prix" value={price} setValue={setPrice} />
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
};

export default CreateRoom;
