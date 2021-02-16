import React from 'react'
import {Link} from 'react-router-dom'

// CSS
import './header.css'

const Header = () => {
    return (
            <header>
                <div className="navlogo">
                    <h1> ReactBlog </h1>
                </div>

                <div className="navlinks">
                    <Link to="/" className="linkers"> Home </Link>
                    <Link to="/allarticles" className="linkers"> Articles </Link>
                    <Link to="/aboutus" className="linkers"> About </Link>
                    <Link to="/contact" className="linkers"> Contact </Link>
                </div>
            </header>
    )
}

export default Header