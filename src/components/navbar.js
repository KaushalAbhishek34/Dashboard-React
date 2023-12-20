import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import './component.css';

function AppNavbar({handleShow}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
        <Button variant="dark" className="bg-dark bg-body-tertiary offcanvas-button"  onClick={handleShow}>
        <i class="bi bi-list"></i>
        </Button>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for..."
              aria-label="Search"
              data-bs-theme="light"
            />
            <Button className='bg-primary' ><i class="bi bi-search"></i></Button>
          </Form>
          <Dropdown>
      <Dropdown.Toggle className='bg-dark bg-body-tertiary ' variant='dark' id="dropdown-basic">
      <i class="bi bi-person-fill"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-end'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <hr></hr>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default AppNavbar;