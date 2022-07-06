
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

const App =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {UserStore.isLoggedIn? <Home /> : <Navigate to = "/login" />} />
        <Route 
            path="/login"
            element= {!UserStore.isLoggedIn? <Login /> : <Navigate to = "/" />}
        />
        <Route path="/personal" element = {UserStore.isLoggedIn? <Personal /> : <Navigate to = "/login" />} />
        <Route path="/chat" element = {UserStore.isLoggedIn? <Chat /> : <Navigate to = "/login" />} />
        <Route path="/seller" element = {UserStore.isLoggedIn? <Seller /> : <Navigate to = "/login" />} />
        
        <Route path="/Product/:id" element ={UserStore.isLoggedIn? <Product /> : <Navigate to = "/login" />} />
      </Routes>
    </BrowserRouter>
    
    
    );
  }
  
  export default App;

