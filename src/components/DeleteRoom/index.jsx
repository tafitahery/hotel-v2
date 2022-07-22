import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { getData } from '../../utils/data';

const DeleteRoom = ({ id, setRooms }) => {
  const handleDelete = () => {
    axios.delete('http://localhost:4000/rooms/' + id);
    getData('http://localhost:4000/rooms').then((res) => setRooms(res));
  };

  return (
    <Button
      variant="danger"
      onClick={() => {
        if (window.confirm('Voulez vous supprimer ce chambre ?'))
          handleDelete();
      }}
    >
      Supprimer
    </Button>
  );
};

export default DeleteRoom;
