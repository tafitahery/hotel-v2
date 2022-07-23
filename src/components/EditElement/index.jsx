import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DeleteElement = ({ id, path }) => {
  const navigate = useNavigate();

  return (
    <Button variant="secondary" onClick={() => navigate(path + id)}>
      Editer
    </Button>
  );
};

export default DeleteElement;
