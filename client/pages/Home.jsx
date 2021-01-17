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
        <p>home</p>
        <SearchContainer searchButtonHandler={searchButtonHandler} ></SearchContainer>
        <TopCategoriesContainer state={this.props} />
      </div>
  )}
}


export default Home;