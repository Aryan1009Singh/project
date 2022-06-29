import React from 'react'
import styled from 'styled-components';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Container=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:50px;
    padding-left: 100px;
    
`
const Wrapper1=styled.div`
    display: flex;
    

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
    padding: 40px;
    margin-bottom: 90px;
    
`
const Chat=styled.button`
    padding:10px;
    width: 90px;
    margin: 20px 10px;
    
`

const Price = styled.div`
    font-size: xx-large;
    font-style: 'Poppins';
    font-weight: 400;
`

const Image=styled.img`
    height: 50%;
    width: 50%;
    
`
const Title=styled.h1`
    
`
const Info1=styled.div`
    
`





const Product = () => {
  return (
    <>
        <Navbar />
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
