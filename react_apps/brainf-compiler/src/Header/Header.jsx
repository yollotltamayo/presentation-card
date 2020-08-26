import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './header-style.css'


function Header(props){
        //const Head = () =>{    
       return(
           <Container>
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                    <h3 class= "other">Compiler of </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <center><h1 class="bit">BRAINF*CK</h1></center>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
           </Container>
       )
}
export default Header;
