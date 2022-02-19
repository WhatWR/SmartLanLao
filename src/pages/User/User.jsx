import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Linkmini from '../../component/Linkmini/Linkmini'
import Menu from '../../component/Menu/Menu'
import Admin from '../Admin/Admin'
import './User.css'
const User = () => {
    const { id } = useParams()
    const [calling, setCalling] = useState([])

    const navigate = useNavigate()
    const adminLogout = (() => {
    return navigate('/login')
    }) 

    
    const getToken = () => {
        return localStorage.getItem('token')
    }

    const cilckBtn = (id) => {
        axios.post(`https://exceed.pontakorn.dev/call/${id}`
        , null, { 
            headers: { 'Authorization': `Token ${getToken()}`}
        })
    }

    const getID = (id) => {
        axios.get(`https://exceed.pontakorn.dev/table/${id}/`).then((res) => {
            setCalling(res.data);
            // return { ...res.data, is_calling: true }
            console.log(res.data)
        })
    }
    useEffect(() => {
        getID(id)
    }, )

    useEffect(() => {
        const id = setInterval(async () => {
          getID(id)
        }, 1000);
        return () => {
          clearInterval(id)
        }
      }, [])

    return (
        <div className='User'>

            <Linkmini
                user={true}
            />
            <button className='btn-logout-user' onClick={adminLogout}>
              Logout
            </button>
            <h1 className='Heading'>Table {id}</h1>
            <button className="custom-btn btn-8" onClick={(e) => cilckBtn(id)}>เรียกพนักงาน</button>
            {calling.is_calling ? <div className='calling'><img className ='img-calling' src="https://media2.giphy.com/media/3ohc0ZvpxOksJebwaI/giphy.gif?cid=ecf05e47oxjweneavcvsyhwfrnhkaadznzqtvlk54ojwkoiz&rid=giphy.gif&ct=g"/></div> : <div></div> } 
            <Menu
                user='prem'
            />

        </div>
    )
}

export default User