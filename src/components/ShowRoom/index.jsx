import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import EditRoom from '../EditRoom';

const ShowRoom = ({ id, name, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>Ar {price}</td>
      <td>
        <EditRoom id={id} /> <Button variant="danger">Supprimer</Button>
      </td>
    </tr>
  );
};

ShowRoom.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShowRoom;
