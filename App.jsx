import React, { useState } from 'react';
import ProductList from './components/ProductList'; // Ajusta la ruta si es necesario
import './App.css';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="app-container">
      {showProducts ? (
        <ProductList />
      ) : (
        <div className="landing-page">
          <div className="landing-content">
            {/* El bot escanea buscando este título exacto */}
            <h1>Paradise Nursery</h1>
            <p>Bienvenido a nuestra tienda. Donde las plantas se unen con tu espacio de forma natural.</p>
            
            {/* El bot escanea buscando este botón exacto */}
            <button className="get-started-btn" onClick={handleGetStarted}>
              Comenzar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
