import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import * as Contentful from 'contentful'

import NavBar from './components/NavBar'
import {NavBarDesk} from './components/NavBarDesk';
import {Home} from './components/Home'
import {Tours} from './components/Tours'
import {Merch} from './components/Merch'
import {Tickets} from './components/Tickets'
import {AboutUs} from './components/AboutUs'

const client = Contentful.createClient({
  space: '5rgn7vd3jtfe',
  accessToken: '5v8Y6-15fcM7Ms3jsvxX5MFzME1COBGrf7NZJJkY4lY'
})


function App() {
  const[entries, setEntries] = useState([]);

  useEffect(() => {
    client.getEntries ({
      'content_type': 'merchandise'
    })
    .then((response) => {
      setEntries(response.items);
    });
  }, []);
  
  useEffect(() => {
    client.getAsset ({
      'content_type' : 'merchandise'
    })
    .then((response) => {
      setEntries(response.img)
    })
  })

  const Entries =  entries.map((entry) => (
    <div className='entry' key={entry.sys.id}>
      {/* <p>{entry.fields.name}</p> */}
    </div>
  ))
  return (
    <div className='body'> 
      <div className='logo-header-desktop'>
        <Link to='/'>    
            <img src='https://www.metalsucks.net/wp-content/uploads/2019/09/CUBLOTW-09_25_2019.jpg'></img>
        </Link>
      </div>
      <NavBar />
      <NavBarDesk />
      <div className='entries'>
      {/* API TEST AREA */}
        <h1>{Entries}</h1> 
      </div>
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

export default App;