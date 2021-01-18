import React, { Component } from 'react';
import TopCategoriesButton from '/client/components/TopCategoryButton.jsx';
class TopCategoriesContainer extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        ['Lifestyle', 'lifestyle'],
        ['Beauty', 'beauty'],
        ['Treats', 'bakery'],
        ['Sporty Goods', 'sporting goods'],
        ['Health', 'health'],
        ['Furry Friends', 'pets'],
        ['Dining', 'restaurants'],
        ['Home Life', 'plants'],
        ['Clothing', 'fashion'],
      ],
    };
  }
  render() {
    // create new array by mapping thru array of categories to create a category button for each one with category button
    const buttonCategories = this.state.categories.map((category, idx) => (
      <TopCategoriesButton
        key={`cat-${idx}`}
        categoryStr={category[0]}
        catBtnHandler={this.props.catBtnHandler}
        categoryKey={category[1]}
      />
    ));


    return (
      <div className="TopCateBox">
        {buttonCategories}
      </div>
  )}
}

export default TopCategoriesContainer;
