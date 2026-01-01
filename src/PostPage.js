import React from 'react'
import { useParams } from 'react-router-dom'


const PostPage = ({Posts,HandleDelete}) => {
  const {id}=useParams();
  const post=Posts.find(post=>((post.id).toString())===id)
  return (
    <div className='PostPage'>
        <h1>PostPage</h1>
        <article className='post'>
            {post &&
            
            <>
            <h2>{post.title}</h2>
            <p>{post.datatime}</p>
            <p>{post.body}</p>
            <button onClick={()=>{
              HandleDelete(post.id)
            }}>Delete</button>
            </>}
            {
              !post&&
              <>
              <h1>Page Not Found</h1>
              <p>Visit Home Page</p>
              </>
            }
        </article>
        
        
    </div>
  )
}

export default PostPage