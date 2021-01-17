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
      <div className='resultsPage'>
          <SearchContainer></SearchContainer>
          <p>results</p>
      </div>

  )}
}


export default Results;