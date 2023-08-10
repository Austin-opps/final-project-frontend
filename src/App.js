import React, { useEffect, useState } from 'react';
import Home from "./pages/homepage/Homepage";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Product from "./pages/products/Products";
import UserProfile from "./pages/userProfile/UserProfile";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import AdminProfile from "./pages/adminProfile/AdminProfile";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Navbar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  const[user, setUser] = useState('');
  const[isLoggedIn,setIsLoggedIn] = useState(false)


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const user_id = sessionStorage.getItem("user_id");
    
    // if (token && user_id) {
      const fetchUser = async () => {
          const resp = await fetch(`/users/${user_id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          });
          const data = await resp.json();
          
          if (resp.ok) {
            setUser(data); // Assuming that the user data is returned by the API
            setIsLoggedIn(true);
            console.log("currentUser", data);
          } else {
            setIsLoggedIn(false);
          }
      };
      fetchUser();
    // } else {
    //   setIsLoggedIn(false);
    // }
  }, []);

  // Your component JSX and other code here
};


  

  return (
    <div>
      <Navbar user={user} setUser={setUser} isLoggedIn={isLoggedIn}  setLogged={setIsLoggedIn}/>
      <main>

      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/userProfile" element={user ? <UserProfile /> : <Home />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={user ? <Cart /> : <Home />} />
            <Route path="/checkout" element={user ? <Checkout /> : <Home />} />
            <Route path="/signup" element={<Signup onSignup={setUser} />} />
            <Route path="/login" element={<Login onLogin={setUser} setLogged={setIsLoggedIn}/>} />
            <Route path="/adminProfile" element={user ? <AdminProfile /> : <Home />} />
          </Routes>
      </main>
    </div>
  );
}

export default App;