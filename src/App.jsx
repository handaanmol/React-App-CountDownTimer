import React, {Component} from 'react';
import Clock from './Clock.jsx';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';
//es6 format like classes
class App extends Component {
  // returns any html rendering we want to do and is most widely used component
  // method
  constructor(props) {
    super(props);
    //state is always an object
    this.state = {
      deadline: 'December 25, 2018',
      newDeadLine: ''
    }

  }

  //new method to change the state of deadline dynamically
  changeDeadline() {
    //never mutate or change state directly
    //this.setState({deadline: 'November 25, 2017'})
    //console.log('state', this.state);
    this.setState({
      deadline: this.state.newDeadLine
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>

        <Clock
        //we can send data from parent comp to child using props - be it object or states
        deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl 
          className="Deadline-input"
          onChange={event => this.setState({
            newDeadLine:event.target.value
          })}
          placeholder="new date"/>
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

//need to export it

export default App;
