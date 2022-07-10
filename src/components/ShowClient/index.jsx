import React from 'react';
import Proptypes from 'prop-types';

const ShowClient = ({ firstName, lastName, address, idCard, phone }) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{address}</td>
      <td>{idCard}</td>
      <td>{phone}</td>
      <td>
        <button>Editer</button>
        <button>Supprimer</button>
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
