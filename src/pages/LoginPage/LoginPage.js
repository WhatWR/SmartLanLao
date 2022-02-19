import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../component/LoginForm/LoginForm'

function LoginPage() {
  const adminUser = {
    name: 'Admin123',
    password: '123456',
  }


  const [user, setUser] = useState({ name: '' })
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const Login = (details) => {
    console.log(details)

    if (
      details.name === adminUser.name &&
      details.password === adminUser.password
    ) {
      console.log('Logged in')
      setUser({
        name: details.name,
      })
      return navigate('/admin')
    } else {
      console.log('Details do not match')
      setError('Details do not match')
    }
  }

  const Logout = () => {
    setUser({ name: '' })
    // console.log('Logout')
    // return navigate('/login')
  }

  


  return (
    <div className="LoginApp">
      {user.name !== '' ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button className="logout-button" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}

export default LoginPage
