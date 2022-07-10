import React, { useState, useEffect } from 'react';
import ShowClient from '../../components/ShowClient';
import { getData } from '../../utils/getData';

const ListClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getData('http://localhost:4000/clients').then((res) => setClients(res));
  }, []);

  return (
    <div>
      <h1>Liste des clients</h1>
      <table>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>CIN</th>
            <th>Téléphone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.map(
            ({ id, firstName, lastName, address, idCard, phone }) => (
              <ShowClient
                key={id}
                firstName={firstName}
                lastName={lastName}
                address={address}
                idCard={idCard}
                phone={phone}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListClients;
