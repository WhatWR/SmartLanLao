import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import LoginForm from '../../component/LoginForm/LoginForm'

function LoginPage() {
  const navigate = useNavigate()
  const [user, setUser] = useState({ name: '' })
  const [error, setError] = useState('')
  const Login = (details) => {
    axios
      .post('https://exceed.pontakorn.dev/api-auth-token/', {
        username: details.name,
        password: details.password,
      })
      .then((response) => {
        setToken(response.data.token)
        if (response.data.is_staff) {
          navigate('/admin')
        } else {
          navigate(`/user/${response.data.table}`)
        }
      })
  }

  const setToken = (token) => {
    localStorage.setItem('token', token)
  }

  const Logout = () => {
    setUser({ name: '' })
  }

  return (
    <div className="LoginApp">
      {user?.name !== '' ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user?.name}</span>
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
