import React, { Component } from 'react';

class TopCategoriesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }


  render() {
   return ( 

   <div className="buttons">
     <button id='button' value={this.props.categoryKey} onClick={(event) => this.props.catBtnHandler(event, this.props.categoryKey)}>
     {this.props.categoryStr}
     </button>
    </div>
   )
  }
}
export default TopCategoriesButton;