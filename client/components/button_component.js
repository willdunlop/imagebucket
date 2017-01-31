//imports
import React from 'react';

//dummy data
const _ELEV = [
   {id: 1, topic: 'Introduction'},
   {id: 2, topic: 'How to use the interface'},
   {id: 3, topic: 'git gud'}
 ]

//create/export component
export default class ElevioHelpButtonComponent extends React.Component {
  whenClicked(){
    if (_ELEV) {
      _ELEV.id(this.props.id);
    } else {
      console.log('_elev is not attached to window, help is unavailable');
    }
  }
  render(){
    return(
      <button className="btn btn-default"  onClick={this.props.whenClicked} >
        Help?
      </button>
    );
  }
}
