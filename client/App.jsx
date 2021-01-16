import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';

import './stylesheet/styles.scss';

const App = (props) => {
  console.log('HI FROM APP.JSX');
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default App;
