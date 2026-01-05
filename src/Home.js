import React from 'react'
import Feed from './Feed'
const Home = ({Posts,fetchError,isLoading}) => {
          

  return (
    <main className='Home'>
      {isLoading&&<p>Loading Posts</p>}
      {!isLoading&&fetchError&&<p>{fetchError}</p>}
        {!isLoading&&!fetchError&&(Posts.length?(<Feed Posts={Posts}/>)
        :(<p>No Post are uploaded</p>))}
    </main>
  )
}

export default Home