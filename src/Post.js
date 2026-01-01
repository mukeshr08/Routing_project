import React from 'react'
import { useParams } from 'react-router-dom'

const Post = ({post}) => {
    const {id}=useParams()
  return (
    <article className='Post'>Post {id}
    <h2>{post.title}</h2>
    <p>{post.datetime}</p>
    <p>{(post.body).length<=25?post.body:`${(post.body).slice(0,25)}...`}</p>
    
    </article>
  )
}

export default Post