
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom"
import Register from "./pages/registerUser/Register";
import Login from './pages/loginUser/Login';
import Home from './pages/homepage/Home';

import Slideimage from './components/slideimage/Slideimage';
import Naav from './components/navbar/Navbar';



function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Naav/>
        
        <main>
        <Route path="/home" children={<Slideimage/>} />
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
