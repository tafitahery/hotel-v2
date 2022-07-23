import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { getData } from '../../utils/data';

const DeleteReservation = ({ id, setReservations }) => {
  const handeleDelete = () => {
    axios
      .delete('http://localhost:4000/reservations/' + id)
      .then(() =>
        getData('http://localhost:4000/reservations').then((res) =>
          setReservations(res)
        )
      );
  };

  return (
    <Button
      variant="danger"
      onClick={() => {
        if (window.confirm('Voulez vous supprimer cette reservation ?'))
          handeleDelete();
      }}
    >
      Supprimer
    </Button>
  );
};

export default DeleteReservation;
