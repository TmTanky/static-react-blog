import React from 'react'

// CSS
import './footer.css'

const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <div className="footerbox">
            <p className="footerdetail"> ReactBlog &copy; {date} (This site is for practice only) </p>
        </div>
    )
}

export default Footer