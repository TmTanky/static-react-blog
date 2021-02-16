import React from 'react'
import {useParams} from 'react-router-dom'

// Datas
import blogsData from '../../datas/blogs'

// CSS
import './articleid.css'

const ArticleByIdPage = () => {

    const { id } = useParams()

    const onlyArticle = blogsData.filter(article => {
        return article.id == id
    }).map(item => {
        return <div key={item.id} className="onlyarticle">
            <h1> {item.title} </h1>
            <p> {item.articleDetail} </p>
        </div>
    })
    
    return (
        <div className="articlebox">
            {onlyArticle}
        </div>
    )
}

export default ArticleByIdPage