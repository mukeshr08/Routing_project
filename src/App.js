import { Route,Routes,Link } from 'react-router-dom';
import About from './About';
import './App.css';

import Home from './Home';
import Missing from './Missing';

import NewPost from './NewPost';
import PostPage from './PostPage';
import Post from './Post';
import postLayouts from './postLayouts';
function App() {
  return (
    <div className="App">
      <nav>
        <ul> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/postpage' element={<postLayouts/>}>
          <Route path='newpost' element={<NewPost/>}/>
          <Route index element={<PostPage/>}/>
          <Route path=':id' element={<Post/>}/>
        </Route>
        <Route path='*' element={<Missing/>}/>
      </Routes>
      
      {/*<Header/>
      <Nav/>
      <Home/>
      <About/>
      <NewPost/>
      <PostPage/>
      <Missing/>
      <Footer/>*/}
      
    </div>
  );
}

export default App;
