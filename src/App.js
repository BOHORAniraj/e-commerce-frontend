
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom"
import Register from "./pages/registerUser/Register";
import Login from './pages/loginUser/Login';
import Home from './pages/homepage/Home';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Slideimage from './components/slideimage/Slideimage';
import Button from '@restart/ui/esm/Button';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="bname">NK collection</div>
      <Navbar   bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/"> ------------- </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="navbar sticky-top me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#action2">Products</Nav.Link>
        <Nav.Link href="/login" >Contact us </Nav.Link>
        <Nav.Link href="/login" >Sign In </Nav.Link>
        
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
        <Slideimage/>
        <main>
          
        <Route path="/home" children={<Home />} />
        <Route path="/registration" children={<Register />} />
          <Route path="/login" children={<Login/> }/>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
