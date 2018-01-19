import React, { Component } from 'react';
import './App.css';
//import BasicExample from './BasicExample';
import _ from 'lodash';

const students = [
  {id: 12,name: 'Marita', score: 23},
  {id: 18,name: 'Dominic' ,score: 27},
  {id: 20,name: 'Bosco' ,score: 22}
]

const StudentLine = (props) => (
  <div>{props.id} {props.name} = {props.score}</div>
)
class App extends Component {
  render() {
    return (
     <div>
      {
        _.map(students, s => <StudentLine {...s}/>)
      }
     </div>
    );
  }
}

export default App;
