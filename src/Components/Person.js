import React from 'react';
import {Button} from 'react-bootstrap';

class Person extends React.Component {
 constructor(props) {
   super(props)
 
   this.state = {
      show : false
   }
 }
  showProfile(){
    this.setState({
      show : true
    })
  }
  render() {
    return (
      <div className='Person'>
        <h1>Personal profile{console.log(this.state.show)}</h1>
        <Button onClick={
          ()=>this.showProfile()
        }>show profile</Button>       
      </div>
    )
  }
}

export default Person;