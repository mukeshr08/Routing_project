import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './Context/DataContext'

const Edit = () => {

  const {Posts,editTitle,seteditTitle,editContent,seteditContent,HandleEdit}=useContext(DataContext)
    const {id}=useParams()
    const post=Posts.find((post)=>(post.id).toString()===id)
    console.log(post)
    useEffect(()=>{
        if(post){
        seteditTitle(post.title)
        seteditContent(post.body)
        }
        
    },[post,seteditTitle,seteditContent])
    console.log(editTitle)
  return (
    <main className='EditPost'>
        <h2>Edit Post</h2>
        <form  onSubmit={(e=>e.preventDefault())}>
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