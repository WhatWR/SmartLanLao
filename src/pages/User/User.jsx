import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Linkmini from '../../component/Linkmini/Linkmini'
import Menu from '../../component/Menu/Menu'
import Admin from '../Admin/Admin'
import './User.css'
const User = () => {
    const { id } = useParams()
    const [calling, setCalling] = useState([])
    
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
        getID()
    }, [])

    return (
        <div className='User'>

            <Linkmini
                user={true}
            />
            <h1 className='Heading'>Table {id}</h1>
            <button className="custom-btn btn-8" onClick={(e) => cilckBtn(id)}>เรียกพนักงาน</button>
            {calling.is_calling ? <div className='calling'><h1>Calling ...</h1></div> : <div><h1></h1></div> } 
            <Menu
                user='prem'
            />

        </div>
    )
}

export default User