import React, { Component } from 'react';
import ResultCard from '../components/ResultCard.jsx';

const ResultsContainer = ({ results, preferredLocations, closedLocations }) => {
  console.log('results :', results);
  console.log('pref Loc :', preferredLocations);
  console.log('closed Loc :', closedLocations);

  let recs = [];

  if (!results) {
    recs = null;
  } else {
    results.forEach(
      (rec, i) => {
        const { id } = rec;

        // check if the location is open & user is using account
        //if (!closedLocations[id] && preferredLocations){
        let isFav = false;

        // checking if location is the user's preferred location
        //preferredLocations[id] ? isFav = true : isFav = false;

        recs.push(<ResultCard key={i} info={rec} isFav={isFav} />);
      }
      //}
    );
  }

  return (
    <div className="resultsContainer">
      {recs}
    </div>
  );
};

export default ResultsContainer;
