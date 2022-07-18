import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ShowRoom = ({ name, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>Ar {price}</td>
      <td>
        <Button variant="secondary">Editer</Button>{' '}
        <Button variant="danger">Supprimer</Button>
      </td>
    </tr>
  );
};

ShowRoom.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShowRoom;
