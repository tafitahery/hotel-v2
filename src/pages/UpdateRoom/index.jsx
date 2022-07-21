import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../utils/data';

const UpdateClient = () => {
  const [room, setRoom] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getData('http://localhost:4000/rooms', id).then((res) => setRoom(res));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name ? name : room.name,
      price: price ? parseInt(price) : room.price,
    };

    axios.put('http://localhost:4000/rooms/' + id, data);
    navigate('/listRooms');
  };

  return (
    <div className="mt-4 ms-3 me-3">
      <h1>Modification d'un chambre</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nom Chambre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer nom chambre"
            required
            defaultValue={room.name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Prix</Form.Label>
          <Form.Control
            type="number"
            placeholder="Entrer prix/nuit"
            required
            defaultValue={room.price}
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

export default UpdateClient;
