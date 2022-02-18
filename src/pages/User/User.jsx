import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../component/Menu/Menu'
import './User.css'
const User = () => {
    const { id } = useParams()
    return (
        <div className='User'>
            <h1 className='Heading'>Table {id}</h1>
            <button class="custom-btn btn-8">เรียกพนักงาน</button>
            <Menu
                user='prem'
            />
            
        </div>
    )
}

export default User