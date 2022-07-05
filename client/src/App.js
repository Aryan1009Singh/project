
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


const App =() => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home /> } />
        <Route 
            path="/login"
            element= {<Login />}
        />
        <Route path="/personal" element = {<Personal />} />
        <Route path="/chat" element = {<Chat />} />
        <Route path="/seller" element = {<Seller />} />
        
        <Route path="/Product/:id" element ={user? <Product /> : <Navigate to = "/login" />} />
      </Routes>
    </BrowserRouter>
    
    
    );
  }
  
  export default App;

