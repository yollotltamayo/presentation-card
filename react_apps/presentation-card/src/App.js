import React, { useState } from 'react';
import './App.css';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import Cardse from  './Cads/Cards';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './Header/Header';
import './Cads/card-style.css';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
function App() {
     const [count, setCount] = useState(0);
    const PROYECTOS = "PROYECTOS";
    const PROJECTS = "PROJECTS";
    
  return (
      <Container>
          <Header data = {count}/>
      <Row>
        <Col md={true}>
          </Col>
          <Col md = {true} >
              <center><h1 class="font2">{count === 1?PROYECTOS:PROJECTS}</h1></center>
          </Col>
          <Col md = {true}>
              <Row>
                    <ToggleButtonGroup type="radio" name= "options" >
                        <ToggleButton className = "float-right" variant={count === 0?"secondary":"primary"} onClick={() =>setCount(0)}value={1}>{count === 0 ?"english":"change to english"}</ToggleButton>
                        <ToggleButton className = "float-right"variant={count === 1?"secondary":"primary"} onClick={() => setCount(1)}value={2}>{count === 1 ?"español":"cambiar a español"}</ToggleButton>
                    </ToggleButtonGroup>
            </Row>
        </Col>
    </Row>
    <Container className = "bg">
        <Row>
            <Col>
                <Cardse data = {count}/>
            </Col>
        </Row>
    </Container>
      </Container>

  );
}

export default App;
