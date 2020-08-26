import"../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Container from 'react-bootstrap/Container'
import Editor from './Editor/Editor'
import Header from './Header/Header'
ReactDOM.render(
  <React.StrictMode>
      <body>
      <Container>
          <Header/>
          <Editor></Editor>
    </Container>
      </body>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
