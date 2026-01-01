import React from 'react'
import Feed from './Feed'

const Home = ({Posts}) => {
  return (
    <main className='Home'>
        {Posts.length?(<Feed Posts={Posts}/>):(<p>No Post are uploaded</p>)}
    </main>
  )
}

export default Home