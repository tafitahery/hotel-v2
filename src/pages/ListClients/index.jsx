import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowClient from '../../components/ShowClient';

const ListClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/clients');
        setClients(data);
      } catch (error) {
        console.log('======== ERROR =======');
      }
    };
    getClients();
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
