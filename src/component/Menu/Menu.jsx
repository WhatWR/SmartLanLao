import React from 'react'
import './Menu.css'
import img1 from '../../images/gallery-img-1.jpg'
import img2 from '../../images/gallery-img-2.jpg'
import img3 from '../../images/gallery-img-3.jpg'
import img4 from '../../images/gallery-img-4.jpg'
import img5 from '../../images/gallery-img-5.jpg'
import img6 from '../../images/gallery-img-6.jpg'

const Menu = () => {
    return (
        <div className="section-3">
            <h1 className="section-heading">Menu</h1>
            <div className="gallery">
                <a href="#" className="gallery-link" title="Order Now">
                    <img src={img1} className="food-img" />
                    <h3 className="food-name">Pancakes</h3>
                    <p className="food-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        commodi possimus iure hic excepturi. Corporis!
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                    <img src={img2} className="food-img" />
                    <h3 className="food-name">Cupcakes</h3>
                    <p className="food-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        commodi possimus iure hic excepturi. Corporis!
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                <img src= {img3} className="food-img" />
                    <h3 className="food-name">Hummus</h3>
                    <p className="food-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        commodi possimus iure hic excepturi. Corporis!
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                <img src= {img4} className="food-img" />
                    <h3 className="food-name">Hamburger</h3>
                    <p className="food-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        commodi possimus iure hic excepturi. Corporis!
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                <img src= {img5} className="food-img" />
                    <h3 className="food-name">Salmon</h3>
                    <p className="food-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        commodi possimus iure hic excepturi. Corporis!
                    </p>
                </a>
                <a href="#" className="gallery-link" title="Order Now">
                <img src= {img6} className="food-img" />
                    <h3 className="food-name">Vegetables</h3>
                    <p className="food-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        commodi possimus iure hic excepturi. Corporis!
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Menu