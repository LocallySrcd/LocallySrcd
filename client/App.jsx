import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import './stylesheet/styles.scss';

// Routers here
import Home from './pages/Home.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null, // will reassigned as the user object sent back from server after client signs up/logins // {firstName: string, lastName: username: string}
      isLoggedIn: false,
      preferredLocations: null, // preferredLocations: object with keys as the placeIDs and values of true; -> will be created when client receive user info after user logins
      closedLocations: null, // closed locations: object with keys as the placeIDs and values of true; -> will be created when client receives results back from fetch request
      fetchTerm: '',
      //longitude: number -> will be created after component mounts
      //latitude: number -> will be created after component mounts
      // results: an array of objects // will be created when server sends back retrieved list of results - this should be update whenever keyword or category is submitted by user
    };

    this.updateUserCoordinates = this.updateUserCoordinates.bind(this);
    this.searchButtonHandler = this.searchButtonHandler.bind(this);
    this.categoryButtonHandler = this.categoryButtonHandler.bind(this);
    this.logInSubmitHandler = this.logInSubmitHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);

  }

  updateUserCoordinates(latitude, longitude) {
    // updates the state with the user's current location
    const userLat = latitude;
    const userLong = longitude;

    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.latitude = userLat;
      newState.longitude = userLong;
      return newState;
    });
  }

  categoryButtonHandler(event) {
    event.preventDefault();
    const term = event.target.value;
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        term: term,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('data back from category ', data)
        this.setState((prevState) => {
          const newState = { ...prevState };
          newState.results = data.results;
          newState.closedLocations = data.closedLocations;
          newState.fetchTerm = data.term;
          return newState;
        });
      })
      .catch((err) => console.log(err));
  }

  searchButtonHandler(term) {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        term: term,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState((prevState) => {
          const newState = { ...prevState };
          newState.results = data.results;
          newState.closedLocations = data.closedLocations;
          newState.fetchTerm = data.term;
          return newState;
        });
      })
      .catch((err) => console.log(err));
      const search = document.getElementById('searchInput');
      search.value = '';
  }

  logInSubmitHandler(username, password) {
    console.log('user logged in', {username}, {password})
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('data from post request', data)
        this.setState((prevState) => {
          const newState = { ...prevState };
          newState.user = data.username
          newState.isLoggedIn = true;
          newState.preferredLocations = data.prefLocations;
          return newState;
        });
      })
      .catch((err) => console.log(err));
  }
  
  logoutHandler() {
    this.setState((prevState) => {
      const newState = { ...prevState }
      newState.user = null;
      newState.preferredLocations = null;
      newState.isLoggedIn = false;
      return newState;
    });
  }

  componentDidMount() {
    // grab the user's location using browser's location and updates state -> client needs to give permission to access location
    const successfulLookup = (position) => {
      const { latitude, longitude } = position.coords;
      this.updateUserCoordinates(latitude, longitude);
    };

    navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
  }

  componentDidUpdate() {
    console.log('State updated: ', this.state);
  }

  render() {
    // appHeader -> is fixed stagnant/constant throughout entire UX. NavBar component will change depending on App's state
    return (
      <Router>
        <div className="appHeader">
          <Link to="/"> 
            <img
              id="logo"
              src="./assets/locallysrcdlogo.png"
              alt="Locally SRCD Logo"
              height='150px'
              width='150px'
            ></img>
          </Link>
          <NavBar 
            userName={this.state.user} 
            userStatus={this.state.isLoggedIn} 
            logInSubmitHandler={this.logInSubmitHandler} 
            logoutHandler={this.logoutHandler} 
            />
        </div>

        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                state={this.state}
                catBtnHandler={this.categoryButtonHandler}
                searchButtonHandler={this.searchButtonHandler}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;












/*      original React Router Approach      
<Router>
    <div className='appHeader'>
      <Link to='/'><img id='logo' src='./assets/locallysrcdlogo.png' alt='Locally SRCD Logo'></img></Link>
      <NavBar />
    </div>

    <Switch>
      <Route path='/signup' component={SignUp} />
      <Route path='/favorites' component={Favorites} />
      <Route path='/results' render={() => (
        <Results 
          state={this.state} 
          searchButtonHandler={this.searchButtonHandler} 
          catBtnHandler={this.categoryButtonHandler}
        />)} />
      <Route path='/' exact render={() => (
        <Home 
          state={this.state} 
          catBtnHandler={this.categoryButtonHandler}  
        />)} />

    </Switch>
</Router>
*/
