import React from 'react'
import styled from 'styled-components';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

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
const Chat=styled.button`
    padding:10px;
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





const Product = () => {
  return (
    <>
        <Navbar />
        <Slider/>
        <Container>

            <Wrapper1>
                <Image src="https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0" />
                <Info1>
                    <Title>Shoes</Title>
                    <Details>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque esse consequatur saepe praesentium obcaecati, aut, ab hic iste ea repudiandae suscipit unde temporibus quisquam libero quae officia dolore veritatis rem.
                    </Details>
                    <Desc>
                        This is a good product.
                    </Desc>
                </Info1>
            </Wrapper1>
            <Wrapper2>
                <Price>
                    Rupee 200
                </Price>
                <Chat>
                    Chat with Seller
                </Chat>
            </Wrapper2>
        </Container>
        <Footer />
    </>
    
  )
}

export default Product;
