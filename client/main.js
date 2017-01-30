// Js in this file will be run on refresh

//Import the react library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

//create a component
const App = () => {
  return(
    <div>
      <ImageList />
    </div>
  );
};

//render this component to the screen
Meteor.startup(() => {      //startup waits for the DOM to load before executing
  ReactDOM.render(<App />, document.querySelector('.container'));
});
