// Js in this file will be run on refresh

//Import the react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';
import ElevioHelpButtonComponent from './components/button_component';
//create a component
class App extends Component {
  constructor(props) {
    //same props that is being passed through the components
    super(props);

    //state object is something that belongs to every component
    //only way to initialize a re-render after the component has loaded
    this.state = { images: [] };
  }

  componentWillMount(){
    //this function will load before the app is rendered
    //good place to load data
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data }));
      //data.data is how the imgur json was formatted
      //this.setState is how we change the state object
  }
  render() {
    console.log(this.state.images);
    return(
      <div>
        {/* <ImageList images={this.state.images}/> */}
        <ElevioHelpButtonComponent />
      </div>
    );
  }
};

//render this component to the screen
Meteor.startup(() => {
  //Meteor.startup waits for the DOM to load before executing
  ReactDOM.render(<App />, document.querySelector('.container'));
  //This line applies the render to the .container div specified on main.html
});
