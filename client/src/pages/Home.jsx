import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { Link, useLocation } from "react-router-dom";
import Posts from "../posts/Posts";
import styled from "styled-components";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import UserStore from "../store/UserStore";
import Login from "./Login";
import axios from 'axios';

const Bu=styled.button`
  width: 150px;
    border-radius: 10px;
    background-color: #ffffffe2;
    font-size: larger;
    font-family: 'Poppins';
    padding: 10px;
    font-style: normal;
    color: black;
    font-weight: 1000;
    cursor: pointer;
`
const Center=styled.div`
  justify-content: center;
  display: flex;
`

export default function Home() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/item/all').then((res) => {
      setPopular(res.data);
    });
  }, []);

  return (
    <>
        
        <div className="home">
            <Navbar setPopular = {setPopular}/>
            <Slider />
            <Posts popular = {popular}/>
            <Center>
              <Bu>Load More</Bu>
            </Center>
            
            <Footer />
            

        </div>
    </>
    );
}
