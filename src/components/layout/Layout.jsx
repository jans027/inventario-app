import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Barra superior - Header */}
      <header className="header">
        <div className="header-left">
          <h1>📦 Inventario</h1>
        </div>
        <div className="header-right">
          <span className="user-name">👤 Admin</span>
          <button className="btn-logout">Cerrar Sesión</button>
        </div>
      </header>

      {/* Contenedor principal con sidebar y contenido */}
      <div className="main-container">
        {/* Barra lateral - Sidebar */}
        <nav className="sidebar">
          <ul>
            <li className="active">📊 Dashboard</li>
            <li>📦 Productos</li>
            <li>💰 Movimientos</li>
            <li>👤 Usuarios</li>
            <li>📈 Reportes</li>
          </ul>
        </nav>

        {/* Área de contenido principal */}
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;