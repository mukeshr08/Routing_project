import { navigate, Route,Routes, useNavigate } from 'react-router-dom';
import About from './About';
import './App.css';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import Footer from './Footer'
import NewPost from './NewPost';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import PostPage from './PostPage' 
function App() {
  const navigate=useNavigate()
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
  const [getTitle,setgetTitle]=useState('')
  const [getContent,setgetContent]=useState('')
  const [SearchResults,setSearchResults]=useState('')
  const HandleNewPost=(e)=>{
    e.preventDefault();
    const id=Posts.length?Posts[Posts.length-1].id+1:1
    const datetime=format(new Date(),'MMMM dd yyyy pp')
    const newPost={id,title:getTitle,datetime,body:getContent}
    const allPosts=[...Posts,newPost]
    setPosts(allPosts)
    setgetTitle('')
    setgetContent('')
    navigate('/')
    
  }
  useEffect(()=>{
    const  FilterResults=Posts.filter((post)=>((post.body).toLowerCase()).includes(SearchPost)||
  ((post.title).toLowerCase()).includes(SearchPost))
  setSearchResults(FilterResults.reverse())
  },[Posts,SearchPost])
  const HandleDelete=(id)=>{
    const afterDelete=Posts.filter(post=>post.id!==id)
    setPosts(afterDelete)
    navigate('/')
  }
  return (
    
    <div className="App">
      
      
      <Header title="Single page app"/>
      <Nav
      SearchPost={SearchPost}
      setSearchPost={setSearchPost}
      />
      <Routes>
      <Route path="/"element={<Home
      Posts={SearchResults}
      />}/>
      
      <Route path='/about' element={<About/>}/>
      
      <Route path='post'>
      <Route index element={<NewPost
      getTitle={getTitle}
      setgetTitle={setgetTitle}
      getContent={getContent}
      setgetContent={setgetContent}
      HandleNewPost={HandleNewPost}
      />}/>
      <Route path=':id' element={<PostPage 
      Posts={Posts}
      HandleDelete={HandleDelete}/>}/>
      </Route>
      
      <Route path='*' element={<Missing/>}/>
      </Routes>
      <Footer/>
        
      
    </div>
  );
}

export default App;
