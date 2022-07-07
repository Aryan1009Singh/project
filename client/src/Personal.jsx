import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './pages/components/Footer'
import Navbar from './pages/components/Navbar'
import Slider from './pages/components/Slider'
import { popular } from './posts/data.js'
import Post from './posts/Post'
import axios from 'axios';
import UserStore from './store/UserStore';
import { useCookies } from 'react-cookie'

const Name= styled.h1`
    
`
const Email= styled.h1`
    
`
const Roll= styled.h1`
    
`
const Container =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
`

const Personal = () =>{
    const [user, setUser] = useState({name: 'loading..', email: 'loading..', roll: 'loading..'});
    const [cookies, setCookie] = useCookies(['loggedIn', 'token', 'loading']);
    useEffect(() => {
        if (cookies['loggedIn']){
            axios.get('http://localhost:5000/user/get?token=' + cookies['token']).then((res) => {
                console.log(res.data);
                setUser(res.data);
            });
        }
    }, []);
    return (
        <>
        <Navbar />
        <Slider />
        <Container>           
            
            <Name>{user.name}</Name>

            <Email>{user.email}</Email>

            <Roll>{user.roll}</Roll>        




            

        </Container>
        <Footer />
        
        </>
        
        

    );
};

export default Personal;