import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

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
          
          <h1><BuildCircleIcon />Ferreteria Caldas</h1>
        </div>
        <div className="header-right">
          <span className="user-name">Admin</span>
          <button className="btn-logout">Cerrar Sesion</button>
        </div>
      </header>

      {/* ===== MAIN CONTAINER ===== */}
      <div className="main-container">
        
        {/* ===== SIDEBAR NAVIGATION ===== */}
        <nav className="sidebar">
          <ul>
            {/* Dashboard link */}
            <li className={isActive('/dashboard') || isActive('/')}>
              <Link to="/dashboard">
                <span className="nav-text">Dashboard</span>
                <span className="nav-short">D</span>
              </Link>
            </li>
            
            {/* Products link */}
            <li className={isActive('/productos')}>
              <Link to="/productos">
                <span className="nav-text">Productos</span>
                <span className="nav-short">P</span>
              </Link>
            </li>
            
            {/* Movements link */}
            <li className={isActive('/movimientos')}>
              <Link to="/movimientos">
                <span className="nav-text">Movimientos</span>
                <span className="nav-short">M</span>
              </Link>
            </li>
            
            {/* Users link */}
            <li className={isActive('/usuarios')}>
              <Link to="/usuarios">
                <span className="nav-text">Usuarios</span>
                <span className="nav-short">U</span>
              </Link>
            </li>
            
            {/* Reports link */}
            <li className={isActive('/reportes')}>
              <Link to="/reportes">
                <span className="nav-text">Reportes</span>
                <span className="nav-short">R</span>
              </Link>
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