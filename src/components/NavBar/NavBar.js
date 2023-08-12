// import React,{useEffect, useState} from "react";
import React from 'react'
import telephone from '../../assets/telephone.png'
import email from '../../assets/email.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import cart from '../../assets/shopping-cart.png'
import userIcon from '../../assets/user-icon.png'
import { NavLink } from "react-router-dom";

import './NavBar.css'

function NavBar({user,setUser,setLogged, isLoggedIn}){


    function handleLogout(){
        sessionStorage.removeItem('jwt');
        sessionStorage.removeItem('user_id');
        setUser(null)
        setLogged(false)
        window.location.href = '/'
        console.log('logged_out');
    }

    
  
    const getTotalQuantity = () => {
    //   let totalQuantity  = 0
    //   for (const item of cartItems){
    //     totalQuantity += item.quantity
    //   }
    //   return totalQuantity
    };
   
    return(
        <>
        <div className="row bg-black mx-auto info-bar">
            <div className="col-md-4 col-sm-6 col-12 d-flex  pb-1">
                <div className="d-flex align-items-center col-md-6 col-sm-6 col-12 ">
                    <img src={telephone} className="img-fluid telephone logo-img" alt="phone number" />
                    <div><p className=" mb-0 text-white ">(+254) 710 605 821</p></div>
                </div>
                <div className="d-flex align-items-center col-md-6 col-sm-6 col-12">
                    <img src={email} className="img-fluid telephone logo-img" alt="phone number" />
                    <p className=" mb-0 text-white">easymart@example.com</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-12 mx-auto pt-2">
                { user && isLoggedIn && !user.isAdmin &&
                        <p className="text-white "><small>Welcome { user.name}</small></p>
                }
                { user.isAdmin && isLoggedIn &&
                        <p className="text-white "><small>Welcome { user.name}</small></p>
                }
                { !user &&
                         <p className="text-white"><small>sign in for variety of products from our shop</small></p>
                }
            </div>
            <div className="col-md-3 col-sm-4 col-12 d-flex">
                <p className="text-white pt-2 mb-0 ">Follow us:</p>
                    <img className="logo-img" src={facebook}  alt="facebook" />
                    <img className="logo-img" src={instagram} alt="instagram" />
                    <img className="logo-img" src={twitter}  alt="twitter" />
                    <img className="logo-img" src={youtube}  alt="youtube" />
            </div>
        </div>
        <nav className="navbar menu-bar navbar-expand-lg navbar-expand-md">
            <div className="container-fluid">
            <NavLink className="navbar-brand fw-bold fs-3 p-0"   to='/'>EASYMART </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="nav-item navbar-nav mx-auto">
                        <NavLink  className={"nav-link "}  to='/'>Home </NavLink>
                        <NavLink  className={"nav-link"} to='/product'>Shop</NavLink>
                    </div>
                    <div className="nav-item navbar-nav ml-auto">
                        
                        { !user.isAdmin && isLoggedIn && user &&
                        <>
                            <NavLink  className={"nav-link"} to='/userProfile'><img src={userIcon} className="m-0 logo-img" alt="user-icon"/> {user.name}</NavLink>
                            <NavLink  className={"nav-link"} type="button" onClick={handleLogout}>Logout</NavLink>
                            <NavLink className="nav-link" to="/cart">
                            <img className="m-0 logo-img" src={cart} alt="shopping cart" /> {getTotalQuantity()}
                            </NavLink>
                        </> } 

                        { user.isAdmin === true && isLoggedIn &&
                            <>
                                <NavLink  className={"nav-link"} to='/adminProfile'><img src={userIcon} className="m-0 logo-img" alt="user-icon"/> Admin </NavLink>
                                <NavLink  className={"nav-link"} type="button" onClick={handleLogout}>Logout </NavLink>
                            </>
                         }

                        { !isLoggedIn && !user &&
                            <>
                            {/* <NavLink  className={"nav-link"} to='/adminProfile'><img src={userIcon} className="m-0 logo-img" alt="user-icon"/> Admin </NavLink> */}
                            <NavLink  className={"nav-link"} to='/signup'>SignUp</NavLink>
                            <NavLink  className={"nav-link"} to='/login'>LogIn</NavLink>
                            {/* <NavLink  className={"nav-link"} to='/cart'><img className="m-0 logo-img" src={cart} alt="shopping cart" /> {getTotalQuantity()}</NavLink> */}
                            </>
                        }
                      
                       
                    </div>
             </div>
            </div>
        </nav>
        </>
    )
}
export default NavBar