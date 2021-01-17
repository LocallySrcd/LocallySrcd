import React, { Component } from 'react';
import TopCategoriesButton from '/client/components/TopCategoryButton.jsx';
class TopCategoriesContainer extends Component {
  constructor() {
    super();
    this.state = {
      //userLocation,
      //preferredLocations, // an object? array? holding ids
      //closedLocations, // an object? array? holding ids
      categories: [
                    ['LifeStyle', 'active'],
                    ['Beauty', 'beautysvc'], 
                    ['Treats', 'food'], 
                    ['Sporty Goods', 'sportgoods'], 
                    ['Health', 'health'], 
                    ['Furry Friends', 'pets'], 
                    ['Dining', 'restaurants'], 
                    ['HomeLife', 'homeandgarden'], 
                    ['Clothing', 'fashion']
                   ]
    };
  }
  render() {
    // create new array by mapping thru array of categories to create a category button for each one with category button
    const buttonCategories = this.state.categories.map((category, idx) => <TopCategoriesButton 
      key={`cat-${idx}`}
      categoryStr={category[0]}
      catBtnHandler={this.props.state.catBtnHandler} 
      categoryKey={category[1]} 
    />)
    return( 
      <div className="TopCateBox">
        {buttonCategories}
      </div>
  )}
}

export default TopCategoriesContainer;
