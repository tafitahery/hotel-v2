import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { getData } from '../../utils/data';

const DeleteElement = ({ id, setElement, url }) => {
  const handeleDelete = () => {
    axios
      .delete(url + '/' + id)
      .then(() => getData(url).then((res) => setElement(res)));
  };

  return (
    <Button
      variant="danger"
      onClick={() => {
        if (window.confirm('Voulez vous supprimer cet element ?'))
          handeleDelete();
      }}
    >
      Supprimer
    </Button>
  );
};

export default DeleteElement;
