import React from 'react';
import PropTypes from 'prop-types';
import EditRoom from '../EditRoom';
import DeleteRoom from '../DeleteRoom';

const ShowRoom = ({ id, name, price, setRooms }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>Ar {price}</td>
      <td>
        <EditRoom id={id} /> <DeleteRoom id={id} setRooms={setRooms} />
      </td>
    </tr>
  );
};

ShowRoom.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShowRoom;
