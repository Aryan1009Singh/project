
import Home from './pages/Home';
import "./app.css"
import Productlist from './pages/Productlist';
import Product from './pages/Product';
import Posts from './posts/Posts';
import Login from './pages/Login';
import Navbar from './pages/components/Navbar';
import Slider from './pages/components/Slider';
import { BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom';
import Post from './posts/Post';
import Personal from './Personal';
import Chat from './Chat';
import Seller from './Seller';
import { useEffect, useState } from 'react';
import UserStore from './store/UserStore';
import { useCookies } from 'react-cookie';

const App =() => {
  const [cookies, setCookie] = useCookies(['loggedIn', 'token', 'loading']);
  console.log(cookies['loggedIn'] == 'true');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {cookies['loggedIn'] == 'true'? <Home /> : <Navigate to = "/login" />} />
        <Route 
            path="/login"
            element= {cookies['loggedIn'] == 'true'? <Navigate to = "/" /> : <Login />}
        />
        <Route path="/personal" element = {cookies['loggedIn'] == 'true' ? <Personal /> : <Navigate to = "/login" />} />
        <Route path="/chat" element = {cookies['loggedIn'] == 'true'? <Chat /> : <Navigate to = "/login" />} />
        <Route path="/seller" element = {cookies['loggedIn'] == 'true'? <Seller /> : <Navigate to = "/login" />} />
        
        <Route path="/Product/:id" element ={cookies['loggedIn'] == 'true'? <Product /> : <Navigate to = "/login" />} />
      </Routes>
    </BrowserRouter>
    
    
    );
  }
  
  export default App;

