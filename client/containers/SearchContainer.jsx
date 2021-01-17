import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render(){
    return(
      <div className ='searchContainer'>
          <input id="searchInput" type="text" placeholder='enter keyword here'></input>
          <Link to='/results'> <button id='searchButton' type='button'></button> </Link>
      </div>
    )
  }
}


export default SearchContainer;