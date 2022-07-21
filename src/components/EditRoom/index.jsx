import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EditRoom = ({ id }) => {
  const navigate = useNavigate();

  return (
    <Button variant="secondary" onClick={() => navigate('/updateRoom/' + id)}>
      Editer
    </Button>
  );
};

export default EditRoom;
