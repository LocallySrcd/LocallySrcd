import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";

import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import SignUp from './pages/SignUp.jsx';



import './stylesheet/styles.scss';

// Routers here

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
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
      
        <Route path='/signup' component={SignUp} />


      </Router>

    )};
}

export default App;


/*         <Route path='/favorites' component={Favorites} />
        <Route path='/' component={Home} /> */