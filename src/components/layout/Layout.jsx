import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

/**
 * Layout component
 * Provides the main structure of the application: header, sidebar and content area
 * @param {React.ReactNode} children - The content to be rendered inside the layout
 */
const Layout = ({ children }) => {
  // Hook to get the current location (URL path)
  const location = useLocation();

  /**
   * Helper function to check if a navigation link is active
   * @param {string} path - The path to compare with the current URL
   * @returns {string} - Returns 'active' class if the path matches, empty string otherwise
   */
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="layout">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header-left">
          <h1>Inventario</h1>
        </div>
        <div className="header-right">
          <span className="user-name">Admin</span>
          <button className="btn-logout">Cerrar Sesión</button>
        </div>
      </header>

      {/* ===== MAIN CONTAINER ===== */}
      <div className="main-container">
        
        {/* ===== SIDEBAR NAVIGATION ===== */}
        <nav className="sidebar">
          <ul>
            {/* Dashboard link */}
            <li className={isActive('/dashboard') || isActive('/')}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            
            {/* Products link */}
            <li className={isActive('/productos')}>
              <Link to="/productos">Productos</Link>
            </li>
            
            {/* Movements link */}
            <li className={isActive('/movimientos')}>
              <Link to="/movimientos">Movimientos</Link>
            </li>
            
            {/* Users link */}
            <li className={isActive('/usuarios')}>
              <Link to="/usuarios">Usuarios</Link>
            </li>
            
            {/* Reports link */}
            <li className={isActive('/reportes')}>
              <Link to="/reportes">Reportes</Link>
            </li>
          </ul>
        </nav>

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;