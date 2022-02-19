import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'

function LoginForm({ Login, error }) {
    const navigate = useNavigate()
    const[details, setDetails]= useState({name:"", password: ""});
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    const backToHome = (() => {
        return navigate('/home')
    })

  return (
    
    <form className = "form-head"onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error != "") ? ( <div classnName="error">{error}</div>): ""}
            <div className="form-group">
                <label className="login-lebel" htmlFor="name">UserName</label>
                <input className = "info-input" type="text" name="name" id="name" onChange={e=> setDetails({...details,name: e.target.value})} value={details.name}/>
            </div> 
            <div className="form-group">
                <label className="login-lebel" htmlFor="password">Password</label>
                <input className = "info-input" type="password" name="password" id="password" onChange={e=> setDetails({...details,password: e.target.value})} value={details.password}/>
            </div>
            <input className="login-submit"type="submit" value={"Login"}/>
            {/* <bottom className="Home-n" onClick={backToHome}>Home</bottom> */}
            <input className="login-submit home-btn"type="submit" value={"Home"} onClick={backToHome} />
        </div>
    </form>
  )
}

export default LoginForm