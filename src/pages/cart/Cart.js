// import React from "react";
// import Checkout from "../../pages/checkout/Checkout";
// function Cart(){
//     return (
//         <>
//             <h2>Cart</h2>
//             <Checkout />
//         </>
//     )
// }
// export default Cart

import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div style={{ minHeight: '500px' }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
          <tr style={{borderBottom: 'dotted' }}>
              <th style={{ width: '300px' }}>Name</th>
              <th style={{ width: '300px' }}>Price</th>
              <th style={{ width: '300px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
<td style={{ width: '300px' }}>{item.name.substring(0, 20)}{item.name.length > 20 ? '...' : ''}</td>
                <td style={{ width: '300px' }}>Ksh.{item.price}</td>
                <td style={{ width: '300px' }}>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
<tr style={{ borderTop: 'double', fontWeight: 'bold', borderBottom: 'double' }}>
              <td colSpan="2" style={{ width: '100px' }}>Total:</td>
              <td style={{ width: '100px' }}>Ksh.{getTotalAmount()}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export default Cart;