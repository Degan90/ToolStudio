
import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header(props) {
    return (
        <div className="header">
                
      <Navbar bg="none" variant="dark" expand="lg" collapseOnSelect={true}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            // className="justify-content-end"
          >
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Rout1">
                <Nav.Link>Rout1</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Rout2">
                <Nav.Link>Rout2</Nav.Link>
              </LinkContainer>
              <Button variant="outline-warning" className="login" target="_blank" >Login</Button>
             <Button variant="outline-warning" className="join" target="_blank" >Join</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
        </div>
    );
}

export default Header;