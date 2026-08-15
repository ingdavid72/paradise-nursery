import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';
import Header from './Header';

// 1. Datos estáticos extraídos para no recrearlos en cada renderizado
const PLANTS_DATA = [
  { id: 1, name: 'Sansevieria', price: 15, category: 'Purificadoras', image: 'https://images.unsplash.com/photo-1628170415690-0f37bce434c4?auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Planta de Cintas', price: 12, category: 'Purificadoras', image: 'https://images.unsplash.com/photo-1596547609652-9fc5d8d42398?auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Lavanda', price: 10, category: 'Aromáticas', image: 'https://images.unsplash.com/photo-1595842588820-2ce4512b07e7?auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Romero', price: 8, category: 'Aromáticas', image: 'https://images.unsplash.com/photo-1594313016519-640be423e808?auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'Monstera Deliciosa', price: 25, category: 'Exóticas', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=300&q=80' },
  { id: 6, name: 'Ficus Lyrata', price: 30, category: 'Exóticas', image: 'https://images.unsplash.com/photo-1505504780517-56455b801a28?auto=format&fit=crop&w=300&q=80' },
];

// Pre-calcular categorías estáticas de forma dinámica pero una sola vez
const CATEGORIES = [...new Set(PLANTS_DATA.map(p => p.category))];

// 2. Extracción de Componente (Single Responsibility Principle)
const ProductCard = ({ plant, isAdded, onAddToCart }) => {
  return (
    <article style={styles.card}>
      <img 
        src={plant.image} 
        alt={`Imagen de ${plant.name}`} 
        style={styles.image} 
        loading="lazy" // Mejora de performance (Lazy Loading)
      />
      <h4 style={styles.title}>{plant.name}</h4>
      <p style={styles.price}>${plant.price.toFixed(2)}</p>
      
      <button 
        onClick={() => onAddToCart(plant)}
        disabled={isAdded}
        aria-label={isAdded ? `${plant.name} ya está en la cesta` : `Añadir ${plant.name} a la cesta`}
        style={{
          ...styles.button,
          backgroundColor: isAdded ? '#9e9e9e' : '#2e7d32',
          cursor: isAdded ? 'not-allowed' : 'pointer',
        }}
      >
        {isAdded ? 'Añadido ✔' : 'Añadir a la cesta'}
      </button>
    </article>
  );
};

// 3. Componente Principal
const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Optimización de Búsqueda: Convertimos el array a un Set O(1) usando useMemo
  // Esto evita recorrer todo el array en cada tarjeta para verificar si existe
  const cartItemIds = useMemo(
    () => new Set(cartItems.map(item => item.id)), 
    [cartItems]
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={styles.container}>
      <Header />
      {/* Uso de etiquetas semánticas (main, section) */}
      <main style={styles.main}>
        <h2 style={styles.heading}>Catálogo de Plantas</h2>
        
        {CATEGORIES.map(category => (
          <section key={category} style={styles.section}>
            <h3 style={styles.categoryTitle}>{category}</h3>
            
            <div style={styles.grid}>
              {PLANTS_DATA.filter(p => p.category === category).map(plant => (
                <ProductCard 
                  key={plant.id} 
                  plant={plant} 
                  isAdded={cartItemIds.has(plant.id)} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

// 4. Diccionario de estilos (Clean Code) 
// Evita crear objetos nuevos en memoria en cada ciclo de renderizado.
const styles = {
  container: { backgroundColor: '#f4f6f5', minHeight: '100vh' },
  main: { padding: '2rem', maxWidth: '1200px', margin: '0 auto' },
  heading: { textAlign: 'center', color: '#2e7d32', marginBottom: '2rem', fontSize: '2.5rem' },
  section: { marginBottom: '3rem' },
  categoryTitle: { borderBottom: '2px solid #2e7d32', paddingBottom: '0.5rem', color: '#333' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '1.5rem' },
  card: { backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' },
  image: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' },
  title: { margin: '0.5rem 0', fontSize: '1.2rem', color: '#333' },
  price: { fontSize: '1.1rem', fontWeight: 'bold', color: '#555', marginBottom: '1rem' },
  button: { color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '25px', fontWeight: 'bold', fontSize: '1rem', width: '100%', transition: 'background-color 0.3s' }
};

export default ProductList;