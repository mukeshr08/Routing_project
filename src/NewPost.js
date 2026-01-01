import React from 'react'

const NewPost = ({getTitle,setgetTitle,getContent,setgetContent,HandleNewPost}) => {
  return (
    <div className='NewPost'>
        <form  onSubmit={HandleNewPost}>
          <label htmlFor="title">Post Title</label>
          <input 
          type="text"
          required
          id='title'
          placeholder='Enter Title'
          value={getTitle}
          onChange={(e)=>{
            setgetTitle(e.target.value)
          }} />
          <label htmlFor="post-body">Content</label>
          <input 
          type="text"
          placeholder='Enter Content'
          required
          id='post-body'
          value={getContent}
          onChange={(e)=>{
            setgetContent(e.target.value)
          }} />

          <button type='submit'>Submit</button>


        </form>
    </div>
  )
}

export default NewPost