import React, { useState } from "react";
import clothesLine from '../../assets/clothesLine.jpg'
import userIcon from '../../assets/user-icon.png'
import lock from '../../assets/lock.png'
import emailBlack from '../../assets/e-mail-black.png'
import fb from '../../assets/facebook1.png'
import ig from '../../assets/instagram1.png'
import tweet from '../../assets/twitter1.png'
import ytube from '../../assets/youtube1.png'
import { useNavigate } from "react-router-dom";
import './signup.css'
function Signup({onSignup}){
    const nav = useNavigate()
    const[username,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[passwordConfirmation,setPasswordConfirmation] = useState("")
    const[profilePicture,setProfilePicture] = useState("")
    const[errors,setErrors] = useState([])

    async function handleSubmit(e){
        e.preventDefault()
        const response =  await fetch('/users',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name:username,
                email,
                password,
                password_confirmation: passwordConfirmation,
                profile_picture: profilePicture,
                isAdmin: false
            })
        })
        const data =  await response.json()
        if(response.ok){
            onSignup(data.user)
            sessionStorage.setItem("jwt", data.jwt);
            sessionStorage.setItem("user", data.user);
            console.log('data',data.user);
            nav('/')
        }else{
            setErrors(data.errors)
        }
        
    }
    return(
        <>
        <div className="row container-fluid">
         <div className="col-11 col-md-7 col-sm-10 d-flex mx-auto m-5 p-0 rounded bg-white signup-card">
            <form onSubmit={handleSubmit} className="col-md-6 col-sm-7 col-12   p-4">
            <div className="form-group d-flex">
                <img src={userIcon} className="logo-img" alt="username" />
                <input type="text" className="border-bottom-only " id="username" placeholder="enter username"  value={username} onChange={(e)=>setUsername(e.target.value)}/>  
            </div>
            <div className="form-group d-flex">
            <img src={emailBlack} alt="email" className="logo-img" />
                <input type="email" className="border-bottom-only " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" example@email.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group d-flex">
            <img src={lock} alt="password" className="logo-img" />
                <input type="password" className="border-bottom-only " id="exampleInputPassword1" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group d-flex">
            <img src={lock} alt="password-confirmation" className="logo-img" />
                <input type="password" className="border-bottom-only " id="exampleInputPassword2" placeholder="password confirmation" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)}/>
            </div>
            <div className="form-group d-flex">
            <img src={userIcon} alt="profile " className="logo-img" />
                <input type="text" className="border-bottom-only " id="profilePicture" placeholder="profile picture" value={profilePicture} onChange={(e)=>setProfilePicture(e.target.value)}/>
            </div>
            {errors.length > 0 && (
                            <ul style={{color:"red"}}>
                                {errors.map((error)=>(
                                    <li key={error}><small>{error}</small></li>
                                ))}
                            </ul>
                        )}
            <div className=" col-md-8 mx-auto">
                <img className="logo-img" src={fb} alt="facebook" />
                <img className="logo-img" src={ig} alt="ig" />
                <img className="logo-img" src={tweet} alt="tweet" />
                <img className="logo-img" src={ytube} alt="youtube" />
            </div>
            <button type="submit" className="btn btn-primary col-md-10 col-10 col-sm-10 m-2">Submit</button>
            <a href='/login' className='nav-link col-7 mx-auto mt-2'><small>Already have an account ?</small></a>
            </form>
            <div className="col-md-6 d-sm-block ">
                <img src={clothesLine} className="img-fluid signup-image rounded" alt="signup" />
            </div>
         </div>
        </div>
        </>
    )
}

export default Signup