import React from 'react';

const ProductsPage = () => {
  return (
    <div>
      <h2>📦 Productos</h2>
      <p className="subtitle">Gestiona el catálogo de productos</p>

      {/* Botón para agregar */}
      <div style={{ marginBottom: '20px' }}>
        <button className="btn-add">+ Agregar Producto</button>
      </div>

      {/* Tabla de productos */}
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Clavo 2"</td>
              <td>$5.000</td>
              <td>45</td>
              <td>Herrajes</td>
              <td>
                <button className="btn-action edit">✏️</button>
                <button className="btn-action delete">🗑️</button>
                <button className="btn-action view">👁️</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pintura Azul</td>
              <td>$25.000</td>
              <td className="low-stock">2 ⚠️</td>
              <td>Pintura</td>
              <td>
                <button className="btn-action edit">✏️</button>
                <button className="btn-action delete">🗑️</button>
                <button className="btn-action view">👁️</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Martillo</td>
              <td>$15.000</td>
              <td>12</td>
              <td>Herramientas</td>
              <td>
                <button className="btn-action edit">✏️</button>
                <button className="btn-action delete">🗑️</button>
                <button className="btn-action view">👁️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;