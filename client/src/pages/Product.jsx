import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import axios from 'axios';
import { useCookies } from 'react-cookie';


const Container=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:50px;
    padding-left: 100px;
    
`
const Wrapper1=styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    flex:1;
    flex-direction: column;
`
const Details=styled.p`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
`
const Desc=styled.p`
    
`


const Wrapper2=styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    margin-bottom: 90px;
    border-radius: 10px;
    border: 2px solid gray;
`
const Delete=styled.button`
    padding:10px;
    display: flex;
    width: 90px;
    margin: 20px 10px;
    border: none;
    background-color: teal;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    
`

const Price = styled.div`
    font-size: xx-large;
    font-style: 'Poppins';
    font-weight: 400;
    text-align: center;
`

const Image=styled.img`
    height: 50%;
    width: 50%;
    border-radius: 10px;
    border: 1px solid black;
    
`
const Title=styled.h1`
    width: fit-content;
    padding: 5px;
    border: 1px solid;
    border-radius: 10px;
    background-color: #a79e9e;
`
const Info1=styled.div`
    
`

const Email=styled.button`
    
    display: flex;
    padding:10px;
    
    width: 90px;
    margin: 20px 10px;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: teal;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    
`





const Product = () => {
    const [item, setItem] = useState({});
    const [roll, setRoll] = useState(0);
    const [mail, setMail] = useState('');
    const [cookies, setCookie] = useCookies(['token', 'loading', 'isLoggedIn']);

    useEffect(() => {
        //console.log(window.location.href.substring(31));
        axios.get('http://localhost:5000/item/single?_id=' + window.location.href.substring(31)).then((res) => {
            console.log(res.data[0]);
            axios.get('http://localhost:5000/user/get?token=' + cookies['token']).then((res) => {
                setRoll(res.data.roll);
            });
            setItem(res.data[0]);
            axios.get('http://localhost:5000/user/email?roll=' + res.data[0].roll).then((res) => {
                console.log(res.data);
                setMail(res.data);
            });
        });
    }, []);

    const clickHandler = () => {
        axios.delete('http://localhost:5000/item/delete?id=' + item._id).then((res) => {
            console.log(res.data);
            window.alert('Item deleted successfully.');
            window.location.replace('/');
        });
    };

  return (
    <>
        <Navbar />
        <Slider/>
        <Container>

            <Wrapper1>
                <Image src={item.image} />
                <Info1>
                    <Title>{item.name}</Title>
                    <Details>
                        {item.description}
                    </Details>
                </Info1>
            </Wrapper1>
            <Wrapper2>
                <Price>
                    Rupee {item.price}
                </Price>
                {roll == item.roll ? <Delete onClick = {clickHandler}>
                    Delete
                </Delete> : <Email onClick = {() => window.open(`mailto:${mail}`)}>
                        Click to Send Mail to the owner
                    </Email>}
            </Wrapper2>
        </Container>
        <Footer />
    </>
    
  )
}

export default Product;
