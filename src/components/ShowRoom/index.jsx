import React from 'react';

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

export default ShowRoom;
