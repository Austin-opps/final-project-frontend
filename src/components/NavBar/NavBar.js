import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({user,logOut}){
    const navigate = useNavigate()
    function handleLogout(){
        fetch('/logout',{
            method: "DELETE"
        })
        .then(()=>
        {
        logOut(null)
        navigate('/')
    })
        
    }

   
    return(
        <nav className="navbar navbar-expand-lg navbar-expand-md">
            <div className="container-fluid">
            <NavLink className={"navbar-brand"}  exact to='/'>EASYMART </NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="nav-item navbar-nav mx-auto">
                        <NavLink  className={"nav-link "} exact to='/'>Home </NavLink>
                        <NavLink  className={"nav-link"} to='/product'>Shop</NavLink>
                        <NavLink  className={"nav-link"} to='#'>About</NavLink>
                    </div>
                    <div className="nav-item navbar-nav ml-auto">
                        
                        { user ? (
                        <>
                            <NavLink  className={"nav-link"} to='/userProfile'>User Profile</NavLink>
                            <NavLink  className={"nav-link"} type="button" onClick={handleLogout}>Logout</NavLink>
                            <NavLink  className={"nav-link"} to='/cart'>Cart</NavLink>
                            
                            
                        </>
                        ) : (
                        <>
                            <NavLink  className={"nav-link"} to='/adminProfile'>Admin Profile</NavLink>
                            <NavLink  className={"nav-link"} to='/signup'>SignUp</NavLink>
                            <NavLink  className={"nav-link"} to='/login'>LogIn</NavLink>
                            <NavLink  className={"nav-link"} to='/cart'>Cart</NavLink>
                        </>
                        )}
                        {/* <NavLink  className={"nav-link"} to='/checkout'>Checkout</NavLink>  should checkout be on Navbar, i dont think it should be a component actually*/} 
                    </div>
            </div>
            </div>
        </nav>
    )
}
export default NavBar