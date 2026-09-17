import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import MovementsPage from './pages/MovementsPage';
import UsersPage from './pages/UsersPage';
import ReportsPage from './pages/ReportsPage';
import './App.css';

/**
 * Main App component
 * Defines all the routes for the application
 * Each route is associated with a specific page component
 */
function App() {
  return (
    <Layout>
      <Routes>
        {/* Default route - shows the Dashboard */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* Products management page */}
        <Route path="/productos" element={<ProductsPage />} />
        
        {/* Sales and purchases movements page */}
        <Route path="/movimientos" element={<MovementsPage />} />
        
        {/* Users management page (admin only) */}
        <Route path="/usuarios" element={<UsersPage />} />
        
        {/* Reports and statistics page */}
        <Route path="/reportes" element={<ReportsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;