import {  createContext } from "react";
import useWindowresize from '../hooks/useWindowresize';
import useAxiosfetch from '../hooks/useAxiosfetch';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../api/posts';
import { format } from 'date-fns';

const DataContext=createContext()
export const DataProvider=({children})=>{
     const navigate=useNavigate()
  const [Posts,setPosts]=useState([]);
  const [SearchPost,setSearchPost]=useState('');
  const [getTitle,setgetTitle]=useState('');
  const [getContent,setgetContent]=useState('')
   const [editTitle,seteditTitle]=useState('')
  const [editContent,seteditContent]=useState('')
  const [SearchResults,setSearchResults]=useState('')
  const {width}=useWindowresize()
  const {data,fetchError,isLoading}=useAxiosfetch("http://localhost:3500/posts")
  useEffect(()=>{
    setPosts(data)
  },[data])
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
    const  FilterResults=Posts.filter((post)=>((post.body).toLowerCase()).includes(SearchPost)||
  ((post.title).toLowerCase()).includes(SearchPost))
  setSearchResults(FilterResults.reverse())
  },[Posts,SearchPost])
  const HandleDelete= async(id)=>{
    try{
      const afterDelete=Posts.filter(post=>post.id!==id)
      await api.delete(`/posts/${id}`)
    setPosts(afterDelete)
    navigate('/')
    }catch(err){
        console.log(`Error ${err.message}`)

      }
    
  }
  const HandleEdit=async(id)=>{
    const datetime=format(new Date(),'MMMM dd,yyyy pp')
    const updatePost={id,title:editTitle,datetime,body:editContent}
    try{
      const response=await api.put(`/posts/${id}`,updatePost)
      setPosts(Posts.map((post)=>post.id===id?{...response.data}:post))
      seteditTitle('')
      seteditContent('')
      navigate('/')
      

    }catch(err){
      console.log(`Error ${err.message}`)
    }

  }
    return(
        <DataContext.Provider value={{
            width ,SearchPost ,setSearchPost,
            SearchResults,fetchError,isLoading,
            getTitle,setgetTitle,getContent,setgetContent,HandleNewPost,
            Posts,HandleDelete,
            editTitle,seteditTitle,editContent,seteditContent,HandleEdit
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext