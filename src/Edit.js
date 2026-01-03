import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Edit = ({Posts,editTitle,seteditTitle,editContent,seteditContent,HandleEdit}) => {
    const {id}=useParams()
    const post=Posts.find((post)=>(post.id).toString()===id)
    useEffect(()=>{
        if(post){
        seteditTitle={post.title}
        seteditContent={post.body}
        }
        
    },[post,seteditTitle,seteditContent])
  return (
    <main>
        <h2>Edit Post</h2>
        <form >
            <label htmlFor="title">Post title</label>
            <input type="text"
            id='title'
            value={editTitle} 
            onChange={(e)=>seteditTitle(e.target.value)}/>
            <label htmlFor="content">Post content</label>
            <textarea type="text"
            id='content'
            value={editContent}
            onChange={(e)=>seteditContent(e.target.value)} />
            <button type='submit' onClick={()=>HandleEdit(post.id)}>Submit</button>
        </form>
    </main>
  )
}

export default Edit