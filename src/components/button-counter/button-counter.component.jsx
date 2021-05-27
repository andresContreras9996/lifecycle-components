import React, { Component } from "react";

export default class ButtonCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      test:false,
    };
  }
  increaseCount = () => {
    this.setState((prevState, prevProps) => ({
      count: prevState.count + 1,
    }));
  };
  resetCount = () => {
    this.setState({
      count: 0,
    });
  };
  throwError=()=>{
    this.setState({
      test:true,
    })
  }


  render() {
    if(this.state.test){
      throw new Error('Testing componentDidCatch')
    }
    return (
      <div>
        {this.state.count <= 5 ? (
          <React.Fragment>
            <h1>Press me, but stop at five!</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.increaseCount}>Click me</button>
            <button onClick={this.throwError}>throw an Error</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1>Something Wrong</h1>
            <button onClick={this.resetCount}>Try Again</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}
