import React, { Component } from 'react';

class TopCategoriesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }


  render() {
    console.log(this.props)
   return ( 

    // onClick={(e) => this.handleInput(e,'value')}value={this.props.categoryKey}
   <div className="buttons">
     <button id='button' value={this.props.categoryKey} onClick={(event) => this.props.catBtnHandler(event, this.props.categoryKey)}>
     {this.props.categoryStr}
     </button>
    </div>
   )
  }
}
export default TopCategoriesButton;