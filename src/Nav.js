import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext'
const Nav = () => {
  const {SearchPost,setSearchPost}=useContext(DataContext)
  return (
    <nav className='Nav'>
      <form className='SearchForm' onSubmit={(e)=>{e.preventDefault()}}>
      <label htmlFor="Search">Search Posts</label>
      <input 
      type="text"
      id='Search' 
      placeholder='Search Posts'
      value={SearchPost}
      onChange={(e)=>setSearchPost(e.target.value)}
      />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/post">Post</Link></li>
      </ul>
    </nav>
  )
}

export default Nav