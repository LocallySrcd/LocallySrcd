import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer.jsx';
import ResultsContainer from '../containers/ResultsContainer.jsx';

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
          
      </div>

  )}
}


export default Results;