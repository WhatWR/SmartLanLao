import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../component/Menu/Menu'
import './User.css'
const User = () => {
    const { id } = useParams()
    return (
        <div className='User'>
            <h1 className='Heading'>Table {id}</h1>
            <Menu
                user='prem'
            />
            <div class="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                HOVER ME
            </div>
        </div>
    )
}

export default User