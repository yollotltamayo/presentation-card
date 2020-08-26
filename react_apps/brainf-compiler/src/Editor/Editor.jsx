import React, { Component } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import {Compiler}from '../Compiler/Compiler'
import './editor-style.css'
require('codemirror/mode/brainfuck/brainfuck');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/elegant.css');
require('codemirror/theme/zenburn.css');
const theme = 'zenburn';
class Editor extends Component{   
    constructor(props) {
    super(props)
    this.state = {
      runCode: false,
      outputText: '.',
      actCode : ' '
    }
  }
  runCode = () => {
       let v = Compiler(this.state.outputText);
      let s = ""
      if(v.Errors.length > 0)
            for(let y = 0;y < v.Errors.length;y++){
              s += v.Errors[y];
              s+= '\0';
        }else{
            s = v.Value;
        }
      console.log(s)
      //  let s = JSON.stringify(v);

      this.setState({actCode:s})
  }
    render(){
    return  (
    <Container>
        <Row>
            <Col>
                <h3 class = "other"><center>Let's Code something</center></h3>
            </Col>
            <Col>
                <h3 class ="other"><center>Output</center></h3>
            </Col>
        </Row>
        <Row>
        <Col >
        <CodeMirror
            value = '+++.'
            options={{
                mode: 'brainfuck',
                theme:theme,
                lineNumbers: true,
                scrollbarStyle: "native"
            }}
            onChange={(editor, data, value) => {
                this.setState({
              runCode: false,
              outputText: value,
            })
          }}
        />
        </Col>
        <Col >
            {/*       <div className="Output">
          {this.state.actCode }</pre>
        </div>*/}
            <CodeMirror
                value = {this.state.actCode}
            options={{
                mode: 'brainfuck',
                theme:'elegant',
                lineSeparator:'\0',
                lineNumbers: true,
                readOnly:true
            }}
            /> 
        </Col>
        </Row>

            <Row>
        <Col>
            <br></br>
            <center><Button onClick={this.runCode}>run code</Button></center>
        </Col>
            </Row>
    </Container>

   )
    }
}
export default Editor;


