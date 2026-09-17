import React from 'react';

/**
 * UsersPage component
 * Displays a table with all users and their roles
 * Only accessible to administrators
 */
const UsersPage = () => {
  return (
    <div>
      <h2>Usuarios</h2>
      <p className="subtitle">Gestión de usuarios del sistema</p>

      {/* ===== ADD USER BUTTON ===== */}
      <div style={{ marginBottom: '20px' }}>
        <button className="btn-add">+ Agregar Usuario</button>
      </div>

      {/* ===== USERS TABLE ===== */}
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Admin user */}
            <tr>
              <td>1</td>
              <td>Admin</td>
              <td>admin@ejemplo.com</td>
              <td><span className="role-admin">Administrador</span></td>
              <td><span className="status-active">Activo</span></td>
              <td>
                <button className="btn-action edit"></button>
                <button className="btn-action delete"></button>
              </td>
            </tr>
            
            {/* Seller user */}
            <tr>
              <td>2</td>
              <td>Juan</td>
              <td>juan@ejemplo.com</td>
              <td><span className="role-seller">Vendedor</span></td>
              <td><span className="status-active">Activo</span></td>
              <td>
                <button className="btn-action edit"></button>
                <button className="btn-action delete"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;