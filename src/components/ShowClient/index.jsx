import React from 'react';
import Proptypes from 'prop-types';
import EditElement from '../EditElement';
import DeleteElement from '../DeleteElement';

const ShowClient = ({
  id,
  firstName,
  lastName,
  address,
  idCard,
  phone,
  setClients,
}) => {
  const url = 'http://localhost:4000/clients';
  const path = '/updateClient/';

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{address}</td>
      <td>{idCard}</td>
      <td>{phone}</td>
      <td>
        <EditElement id={id} path={path} />{' '}
        <DeleteElement id={id} setElement={setClients} url={url} />
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
