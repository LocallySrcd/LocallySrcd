import React, { Component } from 'react';
import { Link } from "react-router-dom";

const NavBar = ( {logInSubmitHandler, userStatus, userName, logoutHandler, seen} ) => {
      // if user is logged in, we should render a new nav bar welcoming back the user.  logInSubmitHandler={logInSubmitHandler} 
      console.log(seen)
      seen = false;
  if (!userStatus) {
    return (
      <div className="login">
        <form >
          <input className="loginput" id ="userName" type="text"
          placeholder="username"
          /> 
          <input className="loginput" id="passWord" type="password"
            placeholder="password" 
          /> 
          <button id="logbutton" type="button" onClick={() => {
            const username = document.getElementById('userName').value;
            const password = document.getElementById('passWord').value; 
            if (!password || !username) {
              // lets render something on the page instead of an alert
              alert('Please enter username and password!')
            } else {
              logInSubmitHandler(username, password);
            }
          } } >
            Log In
        </button>
        <Link to='/signup'>
        <button id="signup">Sign Up</button>
        </Link>
        </form>
            {/* {seen ? <SignUp toggle={this.togglePop} /> : null} */}
            {seen ? alert('sign up') : null}
      </div>  
    )
  } else {
    return (
      <div className="loggedin">
        Welcome back, {userName}
        <button id="logbutton" type="button" onClick={() => logoutHandler()}>Log Out</button>
      </div>
    )
  }
};
  
  export default NavBar;