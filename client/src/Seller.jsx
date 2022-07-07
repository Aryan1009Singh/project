import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './pages/components/Footer'
import Navbar from './pages/components/Navbar'
import Slider from './pages/components/Slider'
import UserStore from './store/UserStore'
import axios from 'axios';
import { useCookies } from 'react-cookie'
import base64 from 'file-base64'

const Name= styled.h1`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const Container =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`

const Input =styled.input`
    width: 300px;
    height: 50px;
    margin: 10px;
    padding: 10px;

`
const Input2 = styled.textarea`
    height: 100px;
    width: 300px;
    margin: 10px;padding:10px;
`




const Seller = () =>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const [cookies, setCookie] = useCookies(['loggedIn', 'loading', 'token']);
    
    const clickHandler = () => {
        base64.encode(image, function(err, base64String){
            axios({
                method: 'post',
                url: 'http://localhost:5000/item/new?token=' + cookies['token'] + '&name=' + name + '&price=' + price + '&description=' + description + '&image=' + base64String
            }).then((res) => {
                console.log(res);
                window.location.replace("/");
            });
        });
    };

    const changeHandler1 = ({target}) => {
        setName(target.value);
    };

    const changeHandler2 = ({target}) => {
        setPrice(target.value);
    };

    const changeHandler3 = ({target}) => {
        setDescription(target.value);
    };

    const changeHandler4 = ({target}) => {
        console.log(target.value);
        setImage(target.value);
    };

    return (
        <>
        <Navbar />
        <Slider />
        <Container>
            
            
            <Name>
                <ul>
                    <li><Input placeholder='Enter the Name of the Product' name='name' onChange={changeHandler1} value = {name}></Input></li>
                    <li><Input placeholder='Enter the Price of the Product' name='price' onChange={changeHandler2} value = {price}></Input></li>
                    <li><Input2 placeholder='Enter the Description of the Product' name='description' onChange={changeHandler3} value = {description}></Input2></li>
                    <li><Input placeholder='Enter the Name of the Product' type="file" accept='image/*' onChange={changeHandler4}></Input></li>    
                    
                           
                </ul>
                <button type = "submit" name = "submit" onClick = {clickHandler}>SUBMIT</button>
                
            </Name>

        </Container>
        <Footer />
        
        </>
        
        

    )
}

export default Seller;