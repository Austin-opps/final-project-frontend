import React, { useState } from "react";
function Signup({onSignup}){
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
                profile_picture: profilePicture
            })
        })
        const data =  await response.json()
        if(response.ok){
            onSignup(data)
            console.log('data',data);
        }else{
            setErrors(data.errors)
        }
        

    }
    return(
        <>
            <form onSubmit={handleSubmit} className="col-md-4 col-sm-8 col-12 mx-auto border p-4">
            <div className="form-group">
                <label for="Username" >Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter Username"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
               
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="password_confirmation">Password confirmation</label>
                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password confirmation" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="profile_image">Profile Picture</label>
                <input type="text" className="form-control" id="profilePicture" placeholder="Profile Picture" value={profilePicture} onChange={(e)=>setProfilePicture(e.target.value)}/>
            </div>
            {errors.length > 0 && (
                            <ul style={{color:"red"}}>
                                {errors.map((error)=>(
                                    <li key={error}><small>{error}</small></li>
                                ))}
                            </ul>
                        )}
  
            <button type="submit" className="btn btn-primary">Submit</button>
            <a href='/login' className='nav-link col-7 mx-auto'><small>Already have an account ?</small></a>
            </form>
        </>
    )
}

export default Signup