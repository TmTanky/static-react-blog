import React from 'react'

// Datas
import blogsData from '../../../datas/blogs'

// Components 
import BlogBox from '../blogbox/blogboxes'

const RootFeed = () => {
    return (
        <div>
            {blogsData.map(blog => {
                return <BlogBox key={blog.id} {...blog} />
            })}
        </div>
    )
}

export default RootFeed