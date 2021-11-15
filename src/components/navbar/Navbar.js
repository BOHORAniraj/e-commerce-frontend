import React from 'react'
import Button from '@restart/ui/esm/Button';
import { useSelector, useDispatch } from 'react-redux';


import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { userLogOut } from "../../pages/user-auth-slice/userAction";
import { NavLink } from 'react-router-dom';
const Naav = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.user)
  const handleOnLogout = () => {
    dispatch(userLogOut())
  }
    return (
        <div className="d-flex justify-content-between">
          <div className="bname">NK collection</div>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    {/* <Navbar.Brand href="/"> ------------- </Navbar.Brand> */}
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="navbar sticky-top ma-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
                navbarScroll>
                {!isLoggedIn ? (
                  <>
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to="#action2">Products</NavLink>
                  <NavLink to="/contactus" >Contact us </NavLink>
                  <NavLink to="/login" >Sign In </NavLink>
                  </>
                ) : (
                    <>
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to="#action2">Products</NavLink>
                      <NavLink to="/contactus" >Contact us </NavLink>
                      <NavLink to="/profile" > Profile </NavLink>
                      
                  <NavLink to="/home" onClick ={handleOnLogout} >SignOut </NavLink>
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
