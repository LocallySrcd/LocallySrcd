import React, { Component } from 'react';
import { Link } from "react-router-dom";

const NavBar = ( {logInSubmitHandler, userStatus, userName, logoutHandler} ) => {
      // if user is logged in, we should render a new nav bar welcoming back the user. 
      userName = 'Daniel'
  if (!userStatus) {
    return (
      <div className="login">
        <form logInSubmitHandler={logInSubmitHandler} >
          <input className="loginput" id ="userName" type="text"
          placeholder="user name"
          /> 
          <input className="loginput" id="passWord" type="text"
            placeholder="password" 
          /> 
          <button id="logbutton" type="button" onClick={() => {
            const username = document.getElementById('userName').value;
            const password = document.getElementById('passWord').value; 
            if (!password || !username) {
              // lets render something on the page instead of an alert
              alert('Please enter username and password!')
            }
            logInSubmitHandler(username, password);
          } } >
            Log In
        </button>
        </form>
            {/* <Link to='/signup'><img id='signup' src="./assets/signup.png" ></img></Link> */}
      </div>  
    )
  }
  return (
    <div className="loggedin">
      Welcome home, {userName}
      <button id="logbutton" type="button" onClick={() => logoutHandler()}>Log Out</button>
    </div>
  )
};
  
  export default NavBar;