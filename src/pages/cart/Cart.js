


import React, { useState, useEffect } from "react";
import "./cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div style={{ minHeight: "500px" }}>

      <h2 className="text-center p-2">Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="col-11 col-md-8 col-sm-11 mx-auto">
          <thead>
            <tr style={{ borderBottom: "dotted" }}>
              <th style={{ width: "300px" }}>Name</th>
              <th style={{ width: "300px" }}>Price</th>
              <th style={{ width: "300px" }}>Action</th>

              {/* we need to add a column for quantity */}
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
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
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
      )}
      <div className="row justify-content-center p-2">
      <Link to="/product" exact className = " col-md-4 col-sm-11 mx-auto">
        <button className="btn btn-primary btn-sm col-11 col-md-2 col-sm-11 mx-auto">
        <span className="arrow-left">&#9756;</span> Continue Shopping
        </button>
        </Link>

        <Link to = "/checkout"exact className="btn btn-primary btn-sm col-11 col-md-1 col-sm-11 mx-auto">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
