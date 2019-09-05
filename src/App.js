import React from 'react';
import SidePanel from "./Components/SidePanel"
import Popular from "./Views/Popular"
import Account from "./Views/Account"

import './App.css';

import { BrowserRouter as Router, Route,NavLink as Link } from "react-router-dom";

import NavCss from './css/nav.css'

function Nav() {
    return (
      <Router>
        <div class='navContainer'>
            <ul>
                <li id="logo">Logo</li>
                <Link exact activeClassName="activeLink" to="/"><li><i class="fas fa-home icon"></i> Home</li></Link>
                <Link exact activeClassName='activeLink' to="/account"><li><i class="fas fa-user-circle"></i> My Account</li></Link>
                <Link exact activeClassName='activeLink' to='/basket'><li><i class="fas fa-shopping-basket icon"></i> Basket</li></Link>
                <Link exact activeClassName='activeLink' to="/contact"><li><i class="fas fa-phone-alt"></i> Contact</li></Link>
                <Link exact activeClassName="activeLink" to="/about"><li><i class="fas fa-burn"></i> About Us</li></Link>
               
            </ul>
        </div>
        <Route path="/" exact component={Popular} />
      <Route path="/account" exact component={Account}/>
        </Router>
    )
    
}



class App extends React.Component{
constructor(props){
  super(props);
}
  render(){
    return (
     <div>
       
     <Nav></Nav>
     
 
   </div>
    )
    }
  
  }

export default App;

