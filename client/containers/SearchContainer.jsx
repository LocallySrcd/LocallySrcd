import React, { Component } from 'react';
import { Link } from "react-router-dom";

const SearchContainer = ({ searchButtonHandler }) => {
    //console.log('search container: ', searchButtonHandler)
    return(
      <div className ='searchContainer'>
          <input id="searchInput" type="text" placeholder='enter keyword here'></input>
          <Link to='/results'> <button id='searchButton' type='button' onClick={() => {
            let userKeywordInput = document.getElementById('searchInput').value;
            if (!userKeywordInput) {userKeywordInput = ''}

            searchButtonHandler(userKeywordInput);
          }}
          ></button> </Link>
      </div>
  )
}


export default SearchContainer;