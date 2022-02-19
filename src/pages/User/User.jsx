import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../component/Menu/Menu'
import Admin from '../Admin/Admin'
import './User.css'
const User = () => {
    const { id } = useParams()
    // const cilckBtn = () => {
    //     <Admin 
    //     />
    // }

    const calling = (id) => {
        axios.get(`https://exceed.pontakorn.dev/table/${id}/`).then((res) => {
            return { ...res.data, is_calling: true }
        })
    }

    return (
        <div className='User'>
            <h1 className='Heading'>Table {id}</h1>
            <button className="custom-btn btn-8" onClick={() => calling(id)}>เรียกพนักงาน</button>
            <Menu
                user='prem'
            />

        </div>
    )
}

export default User