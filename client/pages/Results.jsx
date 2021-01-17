import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer.jsx';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render(){
    return(
      <div>
          <p>results</p>
          <SearchContainer></SearchContainer>
      </div>

  )}
}


export default Results;