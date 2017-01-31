//imports
import React from 'react';

//create/export component
export default class ElevioHelpButtonComponent extends React.Component {
  whenClicked(){
    if (window._elev) {
      window._elev.openArticle(/*this.data.id*/);
    } else {
      console.log('_elev is not attached to window, help is unavailable');
    }
  }
  render(){
    return(
      <button className="btn btn-default"  onClick={this.whenClicked}>
        Help?
      </button>
    );
  }
}
