import React from 'react'
import './Menu.css'
import img1 from './image/alexander-cifuentes-mhad_4H6S14-unsplash.jpg'
import img2 from './image/israel-albornoz-3o-rcD2dBxU-unsplash.jpg'
import img3 from './image/jeff-vanderspank-Gla6keSyoU0-unsplash.jpg'
import img4 from './image/nathan-van-de-graaf-RgC1D05xB9w-unsplash.jpg'
import img5 from './image/yonatan-huaman-castro-RQ1D4LgtIFk-unsplash.jpg'
import img6 from '../../images/gallery-img-6.jpg'

const Menu = (props) => {
    return (
        <div className="section-3">
            <h1 className={`section-heading ${props.user ? 'menu-user' : ''}`}>Menu</h1>
            <div className="gallery">
                <a href="#" className="gallery-link" title="Order Now">
                    <img src={img1} className="food-img" />
                    <h3 className="food-name">Heineken</h3>
                    <p className="food-description">
                        120 Baht/Bottom
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                    <img src={img2} className="food-img" />
                    <h3 className="food-name">Huerca</h3>
                    <p className="food-description">
                        120 Baht/Bottom
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                    <img src={img3} className="food-img" />
                    <h3 className="food-name">Corona Extra</h3>
                    <p className="food-description">
                        120 Baht/Bottom
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                    <img src={img4} className="food-img" />
                    <h3 className="food-name">Meduza</h3>
                    <p className="food-description">
                        150 Baht/Bottom
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                    <img src={img5} className="food-img" />
                    <h3 className="food-name">Salmon</h3>
                    <p className="food-description">
                        100 Baht/Bottom
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                    <img src={img6} className="food-img" />
                    <h3 className="food-name">Vegetables</h3>
                    <p className="food-description">
                        4 Baht
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Menu