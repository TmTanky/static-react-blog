import React from 'react'
import {Link} from 'react-router-dom'

// CSS
import './blogboxes.css'

const BlogBox = ({id, title, articleDetail}) => {
    return (
        <div className="blogboxes">
            <h1> {title} </h1>
            <p> {articleDetail.substring(0,20)}... <span> <Link to={`/article/${id}`}> Read more </Link> </span> </p>
        </div>
    )
}

export default BlogBox