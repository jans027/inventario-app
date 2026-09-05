import React from 'react';

const DashboardPage = () => {
  return (
    <div className="dashboard-content">
      <h2>📊 Dashboard</h2>
      <p className="subtitle">Resumen general del inventario</p>

      {/* Tarjetas de resumen */}
      <div className="cards-container">
        <div className="card">
          <div className="card-icon">📦</div>
          <h3>Total Productos</h3>
          <p className="number">45</p>
          <span className="badge badge-green">+2 este mes</span>
        </div>

        <div className="card">
          <div className="card-icon">📈</div>
          <h3>Stock Total</h3>
          <p className="number">1,280</p>
          <span className="badge badge-green">+45 este mes</span>
        </div>

        <div className="card">
          <div className="card-icon">💰</div>
          <h3>Valor Total</h3>
          <p className="number">$156,800</p>
          <span className="badge badge-green">+$12,400</span>
        </div>

        <div className="card">
          <div className="card-icon">⚠️</div>
          <h3>Alertas</h3>
          <p className="number">3</p>
          <span className="badge badge-red">2 críticas</span>
        </div>
      </div>

      {/* Secciones inferiores */}
      <div className="dashboard-sections">
        <div className="section">
          <h3>⚠️ Productos con Stock Bajo</h3>
          <ul>
            <li>
              <span className="dot red"></span>
              Clavo 2" - <strong>3</strong> unidades
              <button className="btn-order">Pedir</button>
            </li>
            <li>
              <span className="dot red"></span>
              Pintura Azul - <strong>2</strong> unidades
              <button className="btn-order">Pedir</button>
            </li>
            <li>
              <span className="dot red"></span>
              Lija N°80 - <strong>4</strong> unidades
              <button className="btn-order">Pedir</button>
            </li>
          </ul>
        </div>

        <div className="section">
          <h3>📋 Movimientos Recientes</h3>
          <ul>
            <li>
              <span className="badge-sale">Venta</span>
              Clavo 2" - <strong>-5</strong> unidades
              <span className="time">Hoy 10:30</span>
            </li>
            <li>
              <span className="badge-purchase">Compra</span>
              Pintura Azul - <strong>+20</strong> unidades
              <span className="time">Hoy 10:15</span>
            </li>
            <li>
              <span className="badge-sale">Venta</span>
              Martillo - <strong>-2</strong> unidades
              <span className="time">Ayer 16:45</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;