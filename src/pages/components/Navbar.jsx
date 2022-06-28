import styled from 'styled-components'
import './navbar.css'
const Container = styled.div`
    width: 100vw;
    height: 65px;;
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
const But= styled.button`
    width: 150px;
    border-radius: 10px;
    background-color: #564553e3;
    font-size: larger;
    font-family: 'Poppins';
    font-style: normal;
    color: white;
    font-weight: 1000;
    cursor: pointer;
    gap: 10px;
    
`


export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <i class="fa-solid fa-handshake"></i>                
                </Left>
                <Center>
                    <SearchContainer>                        
                        <Input />
                        <i className="top fa-solid fa-magnifying-glass"></i>
                    </SearchContainer>
                    <But>Categories  <i class="fa-solid fa-angle-down"></i>
                       
                    </But>
                </Center>
                <Right>
                    <i class="fa-brands fa-sellcast"></i>
                    
                </Right>
                <Rright>
                    <i class="fa-solid fa-user"></i>
                </Rright>
            </Wrapper>
        </Container>
    )
}
