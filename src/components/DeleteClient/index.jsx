import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteClient = ({ id }) => {
  const handleDelete = () => {
    axios.delete('http://localhost:4000/clients/' + id);
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
