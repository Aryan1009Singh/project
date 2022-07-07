import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './pages/components/Footer'
import Navbar from './pages/components/Navbar'
import Slider from './pages/components/Slider'
import UserStore from './store/UserStore'

const Name= styled.h1`
    display: flex;
    padding: 10px;
`

const Container =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
`

const Input =styled.input`
    width: 300px;
    height: 50px;
    margin: 10px;
    padding: 10px;

`
const Input2 = styled.input`
    height: 100px;
    width: 300px;
    margin: 10px;padding:10px;
`




const Seller = () =>{
    return (
        <>
        <Navbar />
        <Slider />
        <Container>
            
            
            <Name>
                <form method='POST' action={'http://localhost:5000/item/new?token=' + UserStore.token}>
                    <ul>
                        <li><Input placeholder='Enter the Name of the Product' name='name'></Input></li>
                        <li><Input placeholder='Enter the Price of the Product' name='price'></Input></li>
                        <li><Input2 placeholder='Enter the Description of the Product' name='description'></Input2></li>
                        {/* <li><Input placeholder='Enter the Name of the Product' type="file"></Input></li>    
                        <li><Input placeholder='Enter the Name of the Product' type="file"></Input></li>    
                        <li><Input placeholder='Enter the Name of the Product' type="file"></Input></li>    
                        <li><Input placeholder='Enter the Name of the Product' type="file"></Input></li>                       */}
                           
                    </ul>
                </form>
                
            </Name>

        </Container>
        <Footer />
        
        </>
        
        

    )
}

export default Seller;