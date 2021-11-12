import React from 'react'
import Button from '@restart/ui/esm/Button';
import { useSelector , useDispatch } from 'react-redux';

import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { userLogOut } from "../../pages/user-auth-slice/userAction";
const Naav = () => {
  const dispatch = useDispatch()
  const {isLoggedIn} = useSelector((state) => state.user)
    return (
        <div>
          <div className="bname">NK collection</div>
      <Navbar   bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/"> ------------- </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="navbar sticky-top me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
                navbarScroll>
                {!isLoggedIn ? (
                  <>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="#action2">Products</Nav.Link>
                  <Nav.Link href="/login" >Contact us </Nav.Link>
                  <Nav.Link href="/login" >Sign In </Nav.Link>
                  </>
                ) : (
                    <>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="#action2">Products</Nav.Link>
                  <Nav.Link href="/login" >Contact us </Nav.Link>
                  <Nav.Link href="/home" onClick ={() => dispatch(userLogOut())} >SignOut </Nav.Link>
                  </>
                )}
        
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
          </Container>
          
        </Navbar>  
        </div>
    )
}
export default Naav
