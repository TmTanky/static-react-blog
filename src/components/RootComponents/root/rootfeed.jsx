import React from 'react'

// Datas
import blogsData from '../../../datas/blogs'

// Components 
import BlogBox from '../blogbox/blogboxes'

// CSS
import './rootfeed.css'

const RootFeed = () => {
    return (
        <div className="rootfeed">

            <h1 className="titleblog"> Some Blogs </h1>

            {blogsData.slice(0,4).map(blog => {
                return <BlogBox key={blog.id} {...blog} />
            })}
        </div>
    )
}

export default RootFeed