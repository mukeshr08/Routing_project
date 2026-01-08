import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './Context/DataContext'
const Home = () => {
  const {SearchResults,fetchError,isLoading}=useContext(DataContext)
          

  return (
    <main className='Home'>
      {isLoading&&<p>Loading Posts</p>}
      {!isLoading&&fetchError&&<p>{fetchError}</p>}
      {!isLoading&&!fetchError&&(SearchResults.length?(<Feed Posts={SearchResults}/>)
        :(<p>No Post are uploaded</p>))}
    </main>
  )
}

export default Home