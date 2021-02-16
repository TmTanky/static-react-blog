import React from 'react'
import {Link} from 'react-router-dom'

// Datas
import BlogBox from '../../datas/blogs'

// CSS
import './allarticles.css'

const AllArticlesPage = () => {
    return (
        <div className="allarticlesbox">
            <h2> All Articles </h2>
            {BlogBox.map(blog => {
                return <div key={blog.id} className="artilinks">
                    <Link to={`/article/${blog.id}`}> {blog.title} </Link>
                </div>
            })}
        </div>
    )
}

export default AllArticlesPage