import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img5 from '../assets/yo.jp2'
import lil_cat from '../assets/lil_cat.jp2'
import resume from '../assets/resume.pdf'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import './header-style.css'
const esp =  "Mi CV" 
const ing  =  "My resume"
function Header(props) {
    return (
        <Container>
        <Jumbotron>
            <Container>
            <Row className = "row">
                <Col>
                        <h1 class="font2">Yollotl  Tamayo</h1>  
                    <div class="typewriter">
                        <h2 class="font">>In love with 
                        <span class="animated">
                    </span>
                    </h2>
                    </div>
                    <br></br>
                    <Container>
                        <Row xs={3} md={4} lg={9}>
                            <Col>
                            <a rel="noopener noreferrer" href = "https://github.com/yollotltamayo" target="_blank"><img alt = "github"  class = "img"src = {lil_cat} /></a>
                            </Col>
                            <Col>
                                <Button size = "lg" href ={resume} className = "font"  target="_blank"style = {{backgroundColor :'black' ,borderColor: 'black'  ,colorrText:'transparent'}} >{props.data === 1 ?esp : ing}< /Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md = "auto"> 
                    <div class="image-cropper">
                    <Image  md = "auto"src= {img5} alt = "me" responsive/>
                    </div>
                </Col>
                </Row>
            </Container>
            </Jumbotron>
        </Container>
)
}
export default Header;
