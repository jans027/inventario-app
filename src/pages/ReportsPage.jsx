import React from 'react';

const ReportsPage = () => {
  return (
    <div>
      <h2>📈 Reportes</h2>
      <p className="subtitle">Estadísticas y análisis del inventario</p>

      <div className="reports-grid">
        <div className="report-card">
          <h3>⚠️ Productos con Stock Bajo</h3>
          <ul>
            <li>Clavo 2" - 3 unidades</li>
            <li>Pintura Azul - 2 unidades</li>
            <li>Lija N°80 - 4 unidades</li>
          </ul>
        </div>

        <div className="report-card">
          <h3>💰 Valor Total del Inventario</h3>
          <p className="report-number">$156,800</p>
          <span className="badge badge-green">+$12,400 este mes</span>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;