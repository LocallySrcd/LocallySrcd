import React, { Component } from 'react';
import { Link } from "react-router-dom";

const NavBar = ( {logInSubmitHandler, userStatus, userName, logoutHandler, signUpPop, signUpButtonHandler, createUser} ) => {
      // if user is logged in, we should render a new nav bar welcoming back the user.  logInSubmitHandler={logInSubmitHandler} 
      console.log('signup?', signUpPop)
   if (!userStatus && !signUpPop) {
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
        <button id="signup" type="button" onClick={() => signUpButtonHandler()}>Sign Up</button>
        </form>
            {/* {seen ? <SignUp toggle={this.togglePop} /> : null} */}
            {/* {!signUpPop ? <SignUp /> : null} */}
      </div>  
    )
  } else if (signUpPop) {
    return (
      <div className="signupform">Please sign up
        <form>
          <div>
          <input className="signupinput" id ="userName" type="submit"
          placeholder="username"
          />
          </div>
          <div>
          <input className="signupinput" id="passWord" type="password"
            placeholder="password" 
          /> 
          </div>
          </form>
          {/* // login event handler */}
          <div>
          <button id="signupformbtn" type="button" onClick={() => {
            const username = document.getElementById('userName').value;
            const password = document.getElementById('passWord').value; 
            // if (!password || !username) {
            //   // lets render something on the page instead of an alert
            //   alert('Please enter username and password!')
            // } else {
              createUser(username, password);
          } }>Sign Up</button>
          </div>
      </div>
    )
  } else {
    return (
      <div className="loggedin">
        Welcome back, {userName}
        <button id="logbutton" type="button" onClick={() => logoutHandler()
        }>Log Out</button>
      </div>
       
    )
  }
};
  
  export default NavBar;