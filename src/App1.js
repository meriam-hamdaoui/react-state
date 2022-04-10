import React from "react";

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }
  btnClicked() {
    //setState => permission to modify every properity inside state
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        {}
        <p>{this.state.count}</p>
        <button onClick={() => this.btnClicked()}>show</button>
      </div>
    );
  }
}

export default App1;
