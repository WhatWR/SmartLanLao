import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginBtn.css'
const LoginBtn = () => {
    const navigate = useNavigate()
    const adminLogout = () => {
        return navigate('/login')
      }
  return (
    <button className="login" onClick={adminLogout}>Login</button>
  )
}

export default LoginBtn