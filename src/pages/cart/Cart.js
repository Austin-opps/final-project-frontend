
import React, { useState, useEffect } from "react";
import "./cart.css";
import { Link } from "react-router-dom";


function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems.map(item => ({ ...item, quantity: 1 })));
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div style={{ minHeight: "500px" }}>
      <h2 className="text-center p-2">Cart</h2>

      {cartItems.length === 0 ? (
        <div className="row">
          <p className="col-5 col-sm-5 col-md-5 mx-auto d-flex justify-content-center">Your cart is empty.</p>
        </div>
      ) : (
        <div className="container-fluid row">
          <table className=" table col-11 col-md-6 col-sm-11 mx-auto border">
          <thead>
            <tr style={{ borderBottom: "dotted" }}>
              <th style={{ width: "300px" }}>Name</th>
              <th style={{ width: "300px" }}>Price</th>
              <th style={{ width: "300px" }}>Quantity</th>
              <th style={{ width: "200px" }}>Action</th>

            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td style={{ width: "300px" }}>
                  {item.name ? item.name.substring(0, 20) : ""}
                  {item.name && item.name.length > 20 ? "..." : ""}
                </td>
                <td style={{ width: "300px" }}>Ksh.{item.price}</td>
                <td style={{ width: "300px" }}>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </td>
                <td style={{ width: "200px" }}>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr
              style={{
                borderTop: "double",
                fontWeight: "bold",
                borderBottom: "double",
              }}
            >
              <td colSpan="2" style={{ width: "100px" }}>
                Total:
              </td>
              <td style={{ width: "100px" }}>Ksh.{getTotalAmount()}</td>
            </tr>
          </tfoot>
        </table>
        </div>
      )}
      <div className="row justify-content-evenly mx-auto p-2 border">
        <div className="col-2 flex-item  text-center"> 
          <Link  exact to="/product" className="text-white bg-primary p-2 rounded text-decoration-none">
            <span className="arrow-left">&#9756;</span> Continue Shopping
            </Link>
        </div>

       <div className="col-2 flex-item  text-center">
       <Link exact to={{ pathname: "/checkout", search: `?total=${getTotalAmount()}` }} className="text-white bg-primary p-2 rounded text-decoration-none ">
          Checkout
        </Link>
       </div>
      </div>
    </div>
  );
}

export default Cart;

