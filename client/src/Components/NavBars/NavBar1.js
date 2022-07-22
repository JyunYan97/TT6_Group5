import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedButton from '../Content/LoggedButton';

function NavBar1() {

  const [ login, setLogin ] = useState(false)

  let navigate = useNavigate()

  const loginHandler = () => {
    setLogin(true)
    navigate('/login')
  }

  const logoutHandler = () => {
    setLogin(false)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src='https://www.vectorlogo.zone/logos/dbscomsg/dbscomsg-ar21.svg'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
<<<<<<< HEAD
            <Nav.Link href="/wallets">Wallets</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
=======
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/extra">Extra</Nav.Link>
>>>>>>> master
            <NavDropdown title="Extra2" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* {login ? (
                <>
                    <Navbar.Text>User: <a href="#login" style={{marginRight:"1rem"}}>user</a>
                    </Navbar.Text>
                    <Button variant="secondary" onClick={logoutHandler} type="submit" >Logout</Button>
                </>
                 ) : (
                    <Button variant="danger" onClick={loginHandler} type="submit">Login</Button>
                )
            } */}
            <LoggedButton/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar1;

