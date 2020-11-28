import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar'
import {NavBarDesk} from './components/NavBarDesk';
import {Home} from './components/Home'
import {Tours} from './components/Tours'
import {Merch} from './components/Merch'
import {Tickets} from './components/Tickets'
import {AboutUs} from './components/AboutUs'

export const App = (props) => {
  return (
    <div className='body'> 
      <div className='logo-header-desktop'>
        <Link to='/'>    
            <img src='https://www.metalsucks.net/wp-content/uploads/2019/09/CUBLOTW-09_25_2019.jpg'></img>
        </Link>
      </div>
      <NavBar />
      <NavBarDesk />
    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tours">
          <Tours />
        </Route>
        <Route exact path="/merch">
          <Merch />
        </Route>
        <Route exact path="/tickets">
          <Tickets />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}