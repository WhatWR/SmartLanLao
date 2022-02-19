import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginBtn.css'
const LoginBtn = () => {
    const navigate = useNavigate()
    const adminLogout = () => {
        return navigate('/login')
      }
  return (
    <div className="login" onClick={adminLogout}>LoginBtn</div>
  )
}

export default LoginBtn