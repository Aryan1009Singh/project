import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './pages/components/Footer'
import Navbar from './pages/components/Navbar'
import Slider from './pages/components/Slider'
import axios from 'axios';
import UserStore from './store/UserStore';
import { useCookies } from 'react-cookie'
import Post from './posts/Post'

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
const Container2 = styled.div`
    padding: 20px;
    display: flex;
    flex:1;
    flex-wrap: wrap;
       
`

const Personal = () =>{
    const [user, setUser] = useState({name: 'loading..', email: 'loading..', roll: 'loading..'});
    const [cookies, setCookie] = useCookies(['loggedIn', 'token', 'loading']);
    const [personal, setPersonal] = useState([]);
    useEffect(() => {
        if (cookies['loggedIn']){
            axios.get('http://localhost:5000/user/get?token=' + cookies['token']).then((res) => {
                console.log(res.data);
                axios.get('http://localhost:5000/item/personal?roll=' + res.data.roll).then((res) => {
                    console.log(res.data);
                    setPersonal(res.data);
                });
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
            

            <Container2>
        
                {personal.map(item =>(
                    <Post item={item} key={item._id}/> 
                ))}
            </Container2>
        </Container>
        <Footer />
        
        </>
        
        

    );
};

export default Personal;