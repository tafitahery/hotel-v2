import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import CreateClient from './pages/CreateClient';
import CreateRoom from './pages/CreateRoom';
import ListClients from './pages/ListClients';
import ListReservations from './pages/ListReservations';
import ListRooms from './pages/ListRooms';
import Reservation from './pages/Reservation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Reservation />} />
        <Route path="/listReservations" element={<ListReservations />} />
        <Route path="/createClient" element={<CreateClient />} />
        <Route path="/listClients" element={<ListClients />} />
        <Route path="/createRoom" element={<CreateRoom />} />
        <Route path="/listRooms" element={<ListRooms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
