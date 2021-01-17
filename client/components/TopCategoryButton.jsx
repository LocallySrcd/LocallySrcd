import React, { Component } from 'react';

class TopCategoriesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // to determine which icon to render for each category
      'Lifestyle': '../assets/lifestyle.png',
      'Beauty': '../assets/beauty.png',
      'Treats': '../assets/icecream.png',
      'Sporty Goods': '../assets/sportsgood.png',
      'Health': '../assets/health.png',
      'Furry Friends': '../assets/furryfriends.png',
      'Dining': '../assets/taco.png',
      'Home Life': '../assets/plants.png',
      'Clothing': '../assets/shirt.png',
    };

  }


  render() {
    const { categoryKey, categoryStr, catBtnHandler } = this.props;
    let imageSrc = this.state[categoryStr];
  
    const style = {
      height: '125px',
      width: '125px',
      fontSize: '50',
      margin: '2px',
      borderRadius: '20px',
      border: 'none',
      borderRadius: '5px',
      backgroundImage: `url(${imageSrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: 'white',

    }

   return ( 

   <div className="buttons">
     <button className='TopCateButton' value={categoryKey} style={style} onClick={(event) => catBtnHandler(event, categoryKey)}>
     </button>
     <p>{this.props.categoryStr} </p>
    </div>
   )
  }
}
export default TopCategoriesButton;