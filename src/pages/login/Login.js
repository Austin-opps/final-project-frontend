import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({onLogin}){
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[error,setError] = useState("")

    const navigate = useNavigate()
    async function handleSubmit(e){
        e.preventDefault()
      const response = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name:username,
                password
            })
        })
        const data = await response.json()
        if(response.ok){
            onLogin(data);
            console.log('Login',data);
            navigate('/')
        }else{
            setError(data[0].error)
        }
    }
    return(
        <>
            <div>
                <form onSubmit={handleSubmit} className="col-12 col-md-4 col-sm-8 mx-auto">
                    <div className="form-group">
                        <label for="exampleInputPassword1">Username</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    {error.length > 0 && (
                        <ul style={{color:"red"}}>                        
                            <li ><small>{error}</small></li>
                    </ul>
                    )}
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login