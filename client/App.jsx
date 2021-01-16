import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import NavBar from './components/NavBar.jsx';

import './stylesheet/styles.scss';

// Routers here
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import SignUp from './pages/SignUp.jsx';
import Results from './pages/Results.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      // user info (username, login, favs)
      // closed locations
    };
  }

  searchButtonHandler(){
    // send fetch request to server
    // update state with recieved results data
  }


  render() {
    console.log('HI FROM APP.JSX');

    // appHeader -> is fixed stagnant/constant throughout entire UX. NavBar component will change depending on App's state
    return (

      <Router>
        <div className='appHeader'>
          <h1>LOCALLY SRCD</h1>
          <NavBar />
        </div>

        <Switch>
          <Route path='/signup' component={SignUp} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/results' component={Results} />
          <Route path='/' exact component={Home} />

        </Switch>

      </Router>

    )};
}

export default App;


/*         
<Route path='/favorites' component={Favorites} />
<Route path='/' component={Home} /> 
<Route path='/signup' component={SignUp} />        
        
        */