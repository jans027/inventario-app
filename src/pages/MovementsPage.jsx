import React from 'react';

const MovementsPage = () => {
  return (
    <div>
      <h2>💰 Movimientos</h2>
      <p className="subtitle">Registro de ventas y compras</p>

      {/* Botones de acción */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button className="btn-sell">💰 Registrar Venta</button>
        <button className="btn-purchase">📦 Registrar Compra</button>
      </div>

      {/* Tabla de movimientos */}
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Usuario</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hoy 10:30</td>
              <td><span className="badge-sale">Venta</span></td>
              <td>Clavo 2"</td>
              <td>-5</td>
              <td>Juan</td>
              <td>✅ Completado</td>
            </tr>
            <tr>
              <td>Hoy 10:15</td>
              <td><span className="badge-purchase">Compra</span></td>
              <td>Pintura Azul</td>
              <td>+20</td>
              <td>Admin</td>
              <td>✅ Completado</td>
            </tr>
            <tr>
              <td>Ayer 16:45</td>
              <td><span className="badge-sale">Venta</span></td>
              <td>Martillo</td>
              <td>-2</td>
              <td>María</td>
              <td>✅ Completado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovementsPage;