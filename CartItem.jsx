import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../store/CartSlice';
import { Link } from 'react-router-dom';
import Header from './Header';

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Cálculos totales
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleIncrement = (id, currentQty) => {
    dispatch(updateQuantity({ id, quantity: currentQty + 1 }));
  };

  const handleDecrement = (id, currentQty) => {
    dispatch(updateQuantity({ id, quantity: currentQty - 1 }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Próximamente: Funcionalidad de pago en desarrollo.');
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Cesta de la Compra</h2>
        <p><strong>Total de plantas en la cesta:</strong> {totalQuantity}</p>
        <p><strong>Coste total del carrito:</strong> ${totalCost}</p>

        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío. <Link to="/products">Continuar comprando</Link></p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '1rem 0' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                <div style={{ flex: 1, marginLeft: '1rem' }}>
                  <h4>{item.name}</h4>
                  <p>Precio unitario: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button onClick={() => handleDecrement(item.id, item.quantity)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id, item.quantity)}>+</button>
                  <button onClick={() => handleRemove(item.id)} style={{ background: '#d32f2f', color: 'white', border: 'none', padding: '0.4rem', borderRadius: '4px', cursor: 'pointer' }}>Eliminar</button>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <Link to="/products">
                <button style={{ padding: '0.8rem 1.5rem', cursor: 'pointer' }}>Continuar comprando</button>
              </Link>
              <button onClick={handleCheckout} style={{ padding: '0.8rem 1.5rem', background: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Pagar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;