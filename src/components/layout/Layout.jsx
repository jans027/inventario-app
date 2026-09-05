import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  // Función para saber si un enlace está activo
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="header-left">
          <h1>📦 Inventario</h1>
        </div>
        <div className="header-right">
          <span className="user-name">👤 Admin</span>
          <button className="btn-logout">Cerrar Sesión</button>
        </div>
      </header>

      <div className="main-container">
        <nav className="sidebar">
          <ul>
            <li className={isActive('/dashboard') || isActive('/')}>
              <Link to="/dashboard">📊 Dashboard</Link>
            </li>
            <li className={isActive('/productos')}>
              <Link to="/productos">📦 Productos</Link>
            </li>
            <li className={isActive('/movimientos')}>
              <Link to="/movimientos">💰 Movimientos</Link>
            </li>
            <li className={isActive('/usuarios')}>
              <Link to="/usuarios">👤 Usuarios</Link>
            </li>
            <li className={isActive('/reportes')}>
              <Link to="/reportes">📈 Reportes</Link>
            </li>
          </ul>
        </nav>

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;