import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer.jsx';
import ResultsContainer from '../containers/ResultsContainer.jsx';
import TopCategoriesContainer from '../containers/TopCategoriesContainer.jsx'

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // preferredLocations: object with keys as the placeIDs and values of true; -> will be created when client receive user info after user logins
      // closed locations: object with keys as the placeIDs and values of true; -> will be created when client receives results back from fetch request 
      // results: an array of objects // will be created when server sends back retrieved list of results
    };
  }


  render(){
  
    const { results, preferredLocations, closedLocations } = this.props.state;
    const { searchButtonHandler, catBtnHandler } = this.props;

    
    return(
      <div className='resultsPage'>
        <TopCategoriesContainer state={this.props.state} catBtnHandler={catBtnHandler}/>
        {/* <TopCategoriesContainer state={this.props} /> I think we should have the category buttons remain on the results page we probably just need the current category from state to keep it pressed */}
        <SearchContainer searchButtonHandler={searchButtonHandler} />
          <ResultsContainer 
            results={results}
            preferredLocations={preferredLocations}
            closedLocations={closedLocations}
          />
      </div>

  )}
}


export default Results;