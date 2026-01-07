import {  Route,Routes} from 'react-router-dom';
import About from './About';
import './App.css';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import Footer from './Footer'
import NewPost from './NewPost';
import PostPage from './PostPage' 

import Edit from './Edit';

import { DataProvider } from './Context/DataContext';
function App() {
 
  return (
    
    <div className="App">
      
      <DataProvider>
      <Header title="Single page app"/>
      <Nav/>
      <Routes>
      <Route path="/"element={<Home/>}/>
      
      <Route path='/about' element={<About/>}/>
      
      <Route path='post'>
      <Route index element={<NewPost/>}/>
      <Route path=':id' element={<PostPage />}/>
       
      </Route>
     <Route path='edit/:id' element={<Edit/>}/>
      
      <Route path='*' element={<Missing/>}/>
      </Routes>
      <Footer/>
      </DataProvider>
        
      
    </div>
  );
}

export default App;
