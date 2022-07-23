import React from 'react';
import PropTypes from 'prop-types';
import EditRoom from '../EditRoom';
import DeleteElement from '../DeleteElement';

const ShowRoom = ({ id, name, price, setRooms }) => {
  const url = 'http://localhost:4000/rooms';

  return (
    <tr>
      <td>{name}</td>
      <td>Ar {price}</td>
      <td>
        <EditRoom id={id} />{' '}
        <DeleteElement id={id} setElement={setRooms} url={url} />
      </td>
    </tr>
  );
};

ShowRoom.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShowRoom;
