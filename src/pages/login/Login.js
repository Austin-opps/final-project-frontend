import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from '../../assets/user-icon.png'
import cologne from '../../assets/cologne-image.jpg'
import lock from '../../assets/lock.png'
import fb from '../../assets/facebook1.png'
import ig from '../../assets/instagram1.png'
import tweet from '../../assets/twitter1.png'
import ytube from '../../assets/youtube1.png'
import './login.css'

function Login({onLogin}){
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[error,setError] = useState("")

    const navigate = useNavigate()

    const token = localStorage.getItem("jwt");

    async function handleSubmit(e){
        e.preventDefault()
      const response = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body:JSON.stringify({
                name:username,
                password
            })
        })
        const data = await response.json()
        if(response.ok){
            onLogin(data);
            console.log('Logded_in');
            navigate('/')
        }else{
            setError(data[0].error)
        }
    }
    return(
        <>
         <div className="row container-fluid">
            <div className="bg-white mx-auto col-md-6 col-11 col-sm-8 row d-flex login-card m-5 p-0 rounded">
                <div className="col-md-6 d-sm-block p-0"> 
                    <img className="login-image pl-0 rounded" src={cologne} alt="cologne" />
                </div>
                <div className="col-11 col-md-6 col-sm-8 mt-2">
                    <div className="row">
                    <h2>Login</h2>
                    <img  src={userIcon} className="col-6 col-md-6 mx-auto" alt="avatar" />
                    <form onSubmit={handleSubmit} className="form-group ">
                        <div className="form-group d-flex">
                        <img src={userIcon} className="logo-img" alt="username" />
                            <input type="text" className="border-bottom-only " id="exampleInputPassword1" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group d-flex">
                        <img src={lock} className="logo-img" alt="username" />
                            <input type="password" className="border-bottom-only" id="exampleInputPassword2" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        {error.length > 0 && (
                            <ul style={{color:"red"}}>                        
                                <li ><small>{error}</small></li>
                        </ul>
                        )}
                        <div className="row">
                            <div className=" col-md-8 mx-auto">
                                <img className="logo-img" src={fb} alt="facebook" />
                                <img className="logo-img" src={ig} alt="instagram" />
                                <img className="logo-img" src={tweet} alt="twitter" />
                                <img className="logo-img" src={ytube} alt="youtube" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary col-11 m-3">Submit</button>
                    </form>
                 </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login