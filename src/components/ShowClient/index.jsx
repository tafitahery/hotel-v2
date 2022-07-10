import React from 'react';

const ShowClient = ({ client }) => {
  return (
    <tr>
      <td>{client.firstName}</td>
      <td>{client.lastName}</td>
      <td>{client.address}</td>
      <td>{client.idCard}</td>
      <td>{client.phone}</td>
      <td>
        <button>Editer</button>
        <button>Supprimer</button>
      </td>
    </tr>
  );
};

export default ShowClient;
