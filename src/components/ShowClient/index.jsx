import React from 'react';
import Proptypes from 'prop-types';
import EditClient from '../EditClient';
import DeleteClient from '../DeleteClient';

const ShowClient = ({
  id,
  firstName,
  lastName,
  address,
  idCard,
  phone,
  setClients,
}) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{address}</td>
      <td>{idCard}</td>
      <td>{phone}</td>
      <td>
        <EditClient id={id} /> <DeleteClient id={id} setClients={setClients} />
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
