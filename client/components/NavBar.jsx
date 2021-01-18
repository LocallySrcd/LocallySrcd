import React, { Component } from 'react';
import { Link } from "react-router-dom";

const NavBar = ( {logInSubmitHandler} ) => {
  return (
    <div className="login">
          {/* <Link to='/login'><img id='login' src="./assets/user-login-icon-14.png" ></img></Link> */}
      <form logInSubmitHandler={logInSubmitHandler}>
        <input id="userName" type="text"
        placeholder="user name"
        /> 
        <input id="passWord" type="text"
          placeholder="password"
        /> 
        <button type="button" onClick={() => {
          const username = document.getElementById('userName').value;
          const password = document.getElementById('passWord').value; 
          if (!passWord || !userName) {
            alert('Please enter username and password!')
          }
          logInSubmitHandler(username, password);
        }}>
          Log In
      </button>
      </form>
          <Link to='/signup'><img id='signup' src="./assets/signup.png" ></img></Link>
      {/* <form value={state.value} onSubmit={handleSubmit}>
      <input className="search" placeholder="search..." type="text" value={state.value} onChange={handleSubmit} />
      <button type="button" value={state.value} onClick={handleClick}>
      </button> */}
    </div>  
  )};
  
  export default NavBar;