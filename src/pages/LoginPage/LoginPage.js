import React, { useState } from 'react';
import LoginForm from '../../component/LoginForm';
import classes from './LoginPage.module.css'
function LoginPage() {
  const adminUser = {
    name: "Admin123",
    password: "123456"
  }

  const [user, setUser] = useState({name: ""});
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);

    if(details.name == adminUser.name && details.password == adminUser.password ){
    console.log("Logged in");
    setUser({
      name: details.name
    })
  }
    else{
      console.log("Details do not match");
      setError("Details do not match")
    }
  } 
  
  const Logout = () =>{
    setUser({name: ""})
    console.log("Logout");
  }


  return (
    <div className={classes.App}>
      {(user.name != "") ? (
        <div className={classes.welcome}>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ):(
        <LoginForm Login={Login} error={error} />
      )
      }
    </div>
  );
}

export default LoginPage;
