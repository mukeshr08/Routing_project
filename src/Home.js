import React, { useContext } from 'react'
import Feed from './Feed'
import { DataProvider } from './Context/DataContext'
const Home = () => {
  const {SearchResults,fetchError,isLoading}=useContext(DataProvider)
          

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