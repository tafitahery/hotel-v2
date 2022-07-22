import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { getData } from '../../utils/data';

const DeleteClient = ({ id, setClients }) => {
  const handleDelete = () => {
    axios.delete('http://localhost:4000/clients/' + id);
    getData('http://localhost:4000/clients').then((res) => setClients(res));
  };

  return (
    <Button
      variant="danger"
      onClick={() => {
        if (window.confirm('Voulez vous supprimer ce client')) handleDelete();
      }}
    >
      Supprimer
    </Button>
  );
};

export default DeleteClient;
