import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <div className="navlogo">
                    <h1> ReactBlog </h1>
                </div>

                <div className="navlinks">
                    <Link to="/"> Home </Link>
                    <Link to="/aboutus"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </header>
        </div>
    )
}

export default Header