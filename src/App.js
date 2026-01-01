import { Route,Routes,Link } from 'react-router-dom';
import About from './About';
import './App.css';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import Footer from './Footer'
import NewPost from './NewPost';
import PostPage from './PostPage';
import Post from './Post';
import PostLayouts from './PostLayouts';
import { useState } from 'react';
function App() {
  const [Posts,setPosts]=useState([
  {
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2024 11:17:36 AM",
    body: "This is my first post content"
  },
  {
    id: 2,
    title: "Learning React",
    datetime: "July 03, 2024 09:45:12 AM",
    body: "Today I started learning React basics like components and props."
  },
  {
    id: 3,
    title: "JavaScript Tips",
    datetime: "July 05, 2024 02:30:45 PM",
    body: "Sharing some useful JavaScript tips for beginners."
  },
  {
    id: 4,
    title: "CSS Flexbox",
    datetime: "July 07, 2024 06:10:20 PM",
    body: "Flexbox makes layout design easier and more responsive."
  },
  {
    id: 5,
    title: "My Learning Journey",
    datetime: "July 10, 2024 08:55:00 AM",
    body: "Documenting my progress in web development step by step."
  }
]
)
  const [SearchPost,setSearchPost]=useState('')
  return (
    
    <div className="App">
      
      
      <Header title="Single page app"/>
      <Nav
      SearchPost={SearchPost}
      setSearchPost={setSearchPost}
      />
      <Home
      Posts={Posts}
      />
      <About/>
      <NewPost/>
      <PostPage/>
      <Missing/>
      <Footer/>
      
    </div>
  );
}

export default App;
