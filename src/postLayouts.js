import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const postLayouts = () => {
  return (
    <div>
        <p><Link to="/postpage/1">post 1</Link></p>
        <p><Link to="/postpage/2">post 2</Link></p>
        <p><Link to="/postpage/3">post 3</Link></p>
        <p><Link to="/postpage/newpost">newPost</Link></p>
        <Outlet/>
    </div>
  )
}

export default postLayouts