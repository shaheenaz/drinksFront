import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import{ Navbar,Nav} from 'react-bootstrap'

class Header extends React.Component{
  render(){
    return(
      <div>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/">Home</Link>
      <Link to="/fav">Favortie</Link>
    </Nav>
   
  </Navbar>

      </div>
    )
  }
}

export default Header;
