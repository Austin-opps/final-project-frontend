import Home from './pages/homepage/Homepage';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Product from './pages/products/Products';
import UserProfile from './pages/userProfile/UserProfile';
import SingleProduct from './pages/singleProduct/SingleProduct';
import AdminProfile from './pages/adminProfile/AdminProfile';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[user,setUser] = useState("")
  
    useEffect(()=>{
      fetch('/users')
      .then((res)=>{
        if(res.ok){
          res.json().then((user)=>setUser(user))
        }
      })},[])
  return (
    <div>
    <Navbar user = {user} setUser={setUser}/>
    <main>
      {user ? (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/userProfile' element={<UserProfile />} />
        <Route path='/singleProduct' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
    </Routes>
        
      ) : (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup  onSignup={setUser}/>} />
        <Route path='/login' element={<Login onLogin={setUser}/>} />
        <Route path='/product' element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path='/adminProfile' element={<AdminProfile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
    </Routes>
        
      )}
    </main>
    <Footer />
    </div>
  );
}

export default App;
