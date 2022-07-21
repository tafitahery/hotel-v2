import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EditClient = ({ id }) => {
  const navigate = useNavigate();

  return (
    <Button variant="secondary" onClick={() => navigate('/updateClient/' + id)}>
      Editer
    </Button>
  );
};

export default EditClient;
