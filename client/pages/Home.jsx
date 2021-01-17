import React, { Component } from 'react';
import TopCategoriesContainer from '../containers/TopCategoriesContainer.jsx';
import SearchContainer from '../containers/SearchContainer.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //cateWasChosen: true,

    };
  }


  render(){
    const { searchButtonHandler } = this.props;

    return(
      <div>
        <TopCategoriesContainer state={this.props} />
      </div>
  )}
}


export default Home;

/*
if we're using this, we need to go back to App.jsx and pass down searchButtonHandler as a property in the Route Switch
<SearchContainer searchButtonHandler={searchButtonHandler} ></SearchContainer>

*/