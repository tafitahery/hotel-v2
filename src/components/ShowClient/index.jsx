import React from 'react';
import Proptypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ShowClient = ({ firstName, lastName, address, idCard, phone }) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{address}</td>
      <td>{idCard}</td>
      <td>{phone}</td>
      <td>
        <Button variant="secondary">Editer</Button>{' '}
        <Button variant="danger">Supprimer</Button>
      </td>
    </tr>
  );
};

ShowClient.propTypes = {
  firstName: Proptypes.string.isRequired,
  lastName: Proptypes.string.isRequired,
  address: Proptypes.string.isRequired,
  idCard: Proptypes.string.isRequired,
  phone: Proptypes.string.isRequired,
};

export default ShowClient;
