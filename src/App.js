import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import MovementsPage from './pages/MovementsPage';
import UsersPage from './pages/UsersPage';
import ReportsPage from './pages/ReportsPage';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/movimientos" element={<MovementsPage />} />
        <Route path="/usuarios" element={<UsersPage />} />
        <Route path="/reportes" element={<ReportsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;