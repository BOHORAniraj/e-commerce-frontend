import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom"
import Register from "./pages/registerUser/Register";
import Login from './pages/loginUser/Login';
import Home from './pages/homepage/Home';

import Slideimage from './components/slideimage/Slideimage';
import Naav from './components/navbar/Navbar';
import { Emailverification } from './pages/email-verification/Emailverification';
import { PrivateRoute } from "./components/private-route/PrivateRoute"






function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        
        <main>
        <Route path="/" children={<Naav/>} /> 
        <Route path="/home" children={<Slideimage/>} />
        <Route path="/home" children={<Home />} />
        <Route path="/email-verification" children={<Emailverification />} />

          
        <Route path="/registration" children={<Register />} />
        <Route path="/login" children={<Login/> }/>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
      
    </BrowserRouter>

   
    
  );
}

export default App;
