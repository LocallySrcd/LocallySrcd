import React, { Component } from 'react';
import TopCategoriesContainer from '../containers/TopCategoriesContainer.jsx';
import SearchContainer from '../containers/SearchContainer.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateWasChosen: true,

    };
  }


  render(){
    return(
      <div>
        <p>home</p>
        <SearchContainer></SearchContainer>
        
      </div>
  )}
}


export default Home;