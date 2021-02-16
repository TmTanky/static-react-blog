import React from 'react'

const BlogBox = ({id, title, articleDetail}) => {
    return (
        <div>
            <h1> {title} </h1>
            <p> {articleDetail} </p>
        </div>
    )
}

export default BlogBox