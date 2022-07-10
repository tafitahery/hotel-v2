import React from 'react';
import PropTypes from 'prop-types';

const ShowRoom = ({ name, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>Ar {price}</td>
      <td>
        <button>Editer</button>
        <button>Supprimer</button>
      </td>
    </tr>
  );
};

ShowRoom.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShowRoom;
