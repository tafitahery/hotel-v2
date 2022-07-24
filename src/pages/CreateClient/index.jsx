import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Input from '../../components/Input';

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
    <div className="mt-4 ms-3 me-3">
      <h1>Création d'un client</h1>
      <Form onSubmit={(e) => hanldeSubmit(e)}>
        <Input
          type="text"
          label="prénom"
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          type="text"
          label="nom"
          value={lastName}
          setValue={setLastName}
        />
        <Input
          type="text"
          label="adresse"
          value={address}
          setValue={setAddress}
        />
        <Input type="text" label="CIN" value={idCard} setValue={setIdcard} />
        <Input
          type="text"
          label="téléphone"
          value={phone}
          setValue={setPhone}
        />
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
};

export default CreateClient;
