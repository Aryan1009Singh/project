import styled from 'styled-components'
import './navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

const Container = styled.div`
    width: 100vw;
    height: 85px;;
    background-color: #80e1ca;
    gap: 100px;
    
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display: flex;
    gap: 200px;
    justify-content: space-between;
    
`
const Left = styled.i`
    
    font-size: 50px;
    display: flex;
    cursor: pointer;
    
    
`
const Center = styled.div`
   
    display: flex;
    gap: 80px;

`
const Input =styled.input`
    width: 370px;   
    height: 25px;
    font-size: larger;
    border: none;
    background-color: #80e1ca ;
`

const Right = styled.div`    
    display: flex;
    font-size: 50px;
    cursor: pointer;
    gap: 20px;
`


const Rright = styled.div`
    display: flex;
    font-size: 50px ;
    cursor: pointer;
    
`
const SearchContainer= styled.div`
    width: 400px;
    height: 30px;
    border: 2px solid lightyellow;
    align-items: center;
    border-radius: 10px;
    padding: 5px;  
    
`
const But= styled.select`
    width: 150px;
    border-radius: 10px;
    background-color: aqua;
    font-size: larger;
    font-family: 'Poppins';
    font-style: normal;
    color: black;
    font-weight: 1000;
    cursor: pointer;
    gap: 10px;
    padding: 10px;
    margin-right: 10px;
    &:hover,
    &:focus{
        color: black;
        transition:0.4s;
    }
    
`
const Options =styled.option`
    background-color: green;
    color: white;
    font-weight: bold;
    &:hover,
    &:focus{
        color: black;
        transition:0.4s;
    }
    
`


export default function Navbar(props) {
    const [str, setStr] = useState('');
    const changeHandler = ({ target }) => {
        setStr(target.value.toUpperCase());
    };

    const clickHandler = () => {
        console.log(str);
        axios.get('http://localhost:5000/item/filter?str=' + str).then((res) => {
            console.log(res.data);
            props.setPopular(res.data);
        });
    };

    const clickHandler2 = () => {
        window.location.replace('/');
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <i class="fa-solid fa-handshake" onClick = {clickHandler2}></i>               
                </Left>
                <Center>
                    <SearchContainer>                        
                        <Input placeholder = 'Search for items' value = {str} onChange = {changeHandler}/>
                        <i className="top fa-solid fa-magnifying-glass" onClick = {clickHandler}></i>
                    </SearchContainer>
                    <But>
                        <Options disabled selected>
                            Categories
                        </Options>
                        <Options>Link1</Options>
                        <Options>Link1</Options>
                        <Options>Link1</Options>
                        <Options>Link1</Options>
                        <Options>Link1</Options>
                        <Options>Link1</Options>
                        <Options>Link1</Options>
                    </But>
                </Center>
                <Right>
                    <Link to="/seller"><i class="fa-brands fa-sellcast"></i></Link>
                    
                </Right>
            
                <Rright>
                    
                    <Link to="/personal"><i class="fa-solid fa-user"></i></Link>
                </Rright>
            </Wrapper>
        </Container>
    )
}
