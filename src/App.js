import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import  { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import AppNavbar from './components/navbar';
import OffCanvasMenu from './components/offcanvas';
import MainContent from './components/main';
import Footer from "./components/footer"
import './App.css';
function App() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  return (
    <Container fluid className='p-0'>
      <Row>
        <OffCanvasMenu show={show} handleClose={handleClose}  />
      </Row>
      <Col className='sticky-top'>
      <AppNavbar handleShow={handleShow} />
      </Col>
      
      <Col  className={`main ${show ?'shifted': ''}`} >
        <MainContent />
        <Footer className="footer" />
      </Col>

    </Container>
  );
}

export default App;
