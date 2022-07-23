import React from 'react';
import PropTypes from 'prop-types';
import EditElement from '../EditElement';
import DeleteElement from '../DeleteElement';

const ShowRoom = ({ id, name, price, setRooms }) => {
  const url = 'http://localhost:4000/rooms';
  const path = '/updateRoom/';

  return (
    <tr>
      <td>{name}</td>
      <td>Ar {price}</td>
      <td>
        <EditElement id={id} path={path} />{' '}
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
