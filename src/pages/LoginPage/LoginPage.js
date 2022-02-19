import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import LoginForm from '../../component/LoginForm/LoginForm'

function LoginPage() {

  const {id} = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState({ name: '' })
  const [error, setError] = useState('')
  const Login = (details) => {
    console.log()
    axios
      .post('https://exceed.pontakorn.dev/api-auth-token/', {
        username: details.name,
        password: details.password,
      })
      .then((response) => {
        setToken(response.data.token)
        console.log(response)
        if (response.data.is_staff){
          navigate('/admin')
        } else {
          navigate(`/user/${response.data.table}`)
        }
      })

    // if (
    //   details.name === adminUser.name &&
    //   details.password === adminUser.password
    // ) {
    //   // console.log('Logged in')
    //   setUser({
    //     name: details.name,
    //   })
    //   return navigate('/admin')
    // } else {
    //   console.log('Details do not match')
    //   setError('Details do not match')
    // }
  }

  const setToken = (token) => {
    localStorage.setItem('token', token)
  }

  const Logout = () => {
    setUser({ name: '' })
    console.log('Logout')
  }
  console.log(user)

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
