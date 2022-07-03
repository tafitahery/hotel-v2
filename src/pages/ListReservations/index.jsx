import React from 'react';

const ListReservations = () => {
  return (
    <div>
      <h1>Liste des réservations</h1>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Chambre</th>
            <th>Date entrée</th>
            <th>Date sortie</th>
            <th>Sejour</th>
            <th>Prix</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ListReservations;
