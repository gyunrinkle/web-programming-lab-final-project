import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Card } from './components/Card.js';
import { Detail } from './pages/Detail.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/'); }}>Shopping Mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/'); }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail'); }}>Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg" />
            <Container>
              <Row>
                {

                  shoes.map((shoe, i) => {
                    return (
                      <Card key={i} shoes={shoe} i={i + 1} />
                    );
                  })
                }
              </Row>
            </Container>
          </>
        } />

        <Route path='detail/:id' element={
          <Detail shoes={shoes} />
        } />
        <Route path='*' element={<div>404 error</div>} />
      </Routes>

      <button onClick={() => {
        fetch("https://port-0-hello-spring-3xcah2glbjfmfti.gksl2.cloudtype.app/cake_lists")
          .then(response => response.json())
          .catch(error => console.log('error'.error));
      }}>버튼</button>


    </div >
  );
}


export default App;
