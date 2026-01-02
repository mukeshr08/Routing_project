import {  Route,Routes, useNavigate } from 'react-router-dom';
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
import api from './api/posts';
function App() {
  const navigate=useNavigate()
  const [Posts,setPosts]=useState([])
  const [SearchPost,setSearchPost]=useState('')
  const [getTitle,setgetTitle]=useState('')
  const [getContent,setgetContent]=useState('')
  const [SearchResults,setSearchResults]=useState('')
  const HandleNewPost=async(e)=>{
    e.preventDefault();
    let id=Posts.length?Number(Posts[Posts.length-1].id)+1:1
     id=String(id)
    const datetime=format(new Date(),'MMMM dd yyyy pp')
    const newPost={id,title:getTitle,datetime,body:getContent}
    try{
      const response =await api.post('/posts',newPost)
    const allPosts=[...Posts,response.data]
    setPosts(allPosts)

    setgetTitle('')
    setgetContent('')
    navigate('/')
    }catch(err){
        console.log(`Error ${err.message}`)

      }
    
    
  }
  useEffect(()=>{
    const fetchData =async()=>{
      try{
        const response= await api.get('/posts')
        setPosts(response.data)
      }catch(err){
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)

        }
        console.log(`Error ${err.message}`)

      }
      
    }
    fetchData()
  },[])
  useEffect(()=>{
    const  FilterResults=Posts.filter((post)=>((post.body).toLowerCase()).includes(SearchPost)||
  ((post.title).toLowerCase()).includes(SearchPost))
  setSearchResults(FilterResults.reverse())
  },[Posts,SearchPost])
  const HandleDelete= async(id)=>{
    try{
      const afterDelete=Posts.filter(post=>post.id!==id)
      const response=await api.delete(`/posts/${id}`)
    setPosts(afterDelete)
    navigate('/')
    }catch(err){
        console.log(`Error ${err.message}`)

      }
    
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
