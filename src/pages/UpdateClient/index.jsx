import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../utils/data';

const UpdateClient = () => {
  const [client, setClient] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [idCard, setIdcard] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getData('http://localhost:4000/clients', id).then((res) => setClient(res));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName ? firstName : client.firstName,
      lastName: lastName ? lastName : client.lastName,
      address: address ? address : client.address,
      idCard: idCard ? idCard : client.idCard,
      phone: phone ? phone : client.phone,
    };

    axios.put('http://localhost:4000/clients/' + id, data);
    navigate('/listClients');
  };

  return (
    <div className="mt-4 ms-3 me-3">
      <h1>Modification d'un client</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="first-name">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer prénom"
            required
            defaultValue={client.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last-name">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer nom"
            required
            defaultValue={client.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Adresse</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer adresse"
            required
            defaultValue={client.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="id-card">
          <Form.Label>CIN</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer numero de CIN"
            required
            defaultValue={client.idCard}
            onChange={(e) => setIdcard(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer numero téléphone"
            required
            defaultValue={client.phone}
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

export default UpdateClient;
