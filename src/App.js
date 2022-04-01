import React from 'react';
import Person from './Components/Person.js';
import './App.css'
import { Button } from 'react-bootstrap';

class App extends React.Component {
  // class constructor
  constructor(){
    super();
    this.state = {
      btnText : "show profile",
      show : true,
      count:0
    };
  }
  // component did mount function
  componentDidMount(){
    setInterval(() => this.setState({count: this.state.count+1}),1000);
  }
  // onclick function
  btnClick(){
    this.setState({show: !this.state.show})
    if(this.state.btnText === "show profile"){
      this.setState({btnText : "hide profile"})
    }
    if(this.state.btnText === "hide profile"){
      this.setState({btnText : "show profile"})
    }
  }

  render() {
    return (
      <div className='App'>       
        {!this.state.show && <Person />}
        <h2> {this.state.count}</h2>
        <Button className='button-53'
              onClick={() => this.btnClick()}>
          {this.state.btnText}
        </Button>
      </div>
    )
  }
}

export default App;
