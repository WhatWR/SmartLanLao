import React from 'react'
import { Link } from 'react-router-dom';
import './Linkmini.css'
const Linkmini = () => {
    return (
        <Link to='./minigame'>
        <div className="card">
            
            <img className='card-img' src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-game-game-development-icongeek26-glyph-icongeek26.png" />
            <h3 className="card-name">minigame</h3>
            
        </div>
        </Link>
    )
}

export default Linkmini