import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EditReservation = ({ id }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="secondary"
      onClick={() => navigate('/updateReservation/' + id)}
    >
      Editer
    </Button>
  );
};

export default EditReservation;
