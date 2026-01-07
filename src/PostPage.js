import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';

const PostPage = () => {
  const {Posts,HandleDelete}=useContext(DataProvider)
  const {id}=useParams();
  const post=Posts.find(post=>((post.id).toString())===id)
  return (
    <div className='PostPage'>
        <h1>PostPage</h1>
        <article className='post'>
            {post &&
            
            <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <Link to={`/edit/${post.id}`}><button>Edit Post</button></Link>
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