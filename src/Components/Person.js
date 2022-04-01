import React from 'react';

class Person extends React.Component {
 state = {
   fullName: "HAMDAOUI Meriam",
   bio: "Network engineer learning the web developement",
   photo: "images/reading.jpg",
   job : "Full Stack JS student",
   show: true,
 };
  render() {
    return (
      <div className='Person'>
        <h1> {this.state.fullName}</h1>
        <h2>{this.state.job}</h2>
        <p>{this.state.bio}</p>
        <img 
          src={this.state.photo}
          alt='reading'
          style={{ width: 350, height: 350, borderRadius: "25%" }}/>
      
      </div>
    )
  }
}

export default Person;