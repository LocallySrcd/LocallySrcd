import React, { Component } from 'react';
import { Link } from "react-router-dom";

const NavBar = ( {logInSubmitHandler, userStatus, userName, logoutHandler} ) => {
      // if user is logged in, we should render a new nav bar welcoming back the user.  logInSubmitHandler={logInSubmitHandler} 
     
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
        </form>
            {/* <Link to='/signup'><img id='signup' src="./assets/signup.png" ></img></Link> */}
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