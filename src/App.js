import React from 'react';
import SidePanel from "./Components/SidePanel"
import Popular from "./Views/Popular"
import Footer from './Components/Footer'
import Account from "./Views/Account"

import './App.css';

import { BrowserRouter as Router, Route, NavLink as Link } from "react-router-dom";

import NavCss from './css/nav.css'

var display = false;
function popSide() {
  const list = document.getElementsByClassName('innerList')[0];
  if (display === false) {
    list.style.width = "50%"
    const burger = document.getElementsByClassName('fa-bars')[0];
    burger.style.position = 'fixed'
    burger.style.top = '20px'
    display = true;
  }
  else if (display === true) {
    list.style.width = '0'
    display = false;
    const burger = document.getElementsByClassName('fa-bars')[0];
    burger.style.position = 'absolute'
    burger.style.top = '5px'
  }

}
window.addEventListener('resize', function(){
  const list = document.getElementsByClassName('innerList')[0];
  if (window.innerWidth > 845){
list.style.width = '100%';
display = false;
console.log('screen changed')
  }
  if(window.innerWidth < 845){
    list.style.width = '0';
    display = false;
    console.log('screen changed again')
  }
})

class Nav extends React.Component {

  render() {
    return (
      <Router>
        <div class='navContainer'>
          <li id="logo2"></li>
          <li onClick={popSide} id="burger"><i class="fas fa-bars"></i></li>
          <ul class="innerList">

            <li id="logo"></li>
            <Link exact activeClassName="activeLink" to="/"><li class="topLI"><i class="fas fa-home icon"></i> Home</li></Link>
            <Link exact activeClassName='activeLink' to="#"><li><i class="fas fa-user-circle"></i> My Account</li></Link>
            <Link exact activeClassName='activeLink' to='#'><li><i class="fas fa-shopping-basket icon"></i> Basket</li></Link>
            <Link exact activeClassName='activeLink' to="#"><li><i class="fas fa-phone-alt"></i> Contact</li></Link>
            <Link exact activeClassName="activeLink" to="#"><li><i class="fas fa-burn"></i> About Us</li></Link>
          </ul>
        </div>
        <Route path="/" exact component={Popular} />
        <Route path="/account" exact component={Account} />
      </Router>
    )

  }
}
////// THIS IS FOR MAKING NAVIGATION


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

        <Nav></Nav>
        <Footer></Footer>

      </div>
    )
  }

}

export default App;

