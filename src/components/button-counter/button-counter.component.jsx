import React, { Component } from "react";

export default class ButtonCounter extends Component {
  //usualmente, agregar una propiedad al state, llamada error que sera la responsable de renderizar bajo condiciones aceptadas
  constructor() {
    super();
    this.state = {
      count: 0,
      error: false,
    };
  }
  increaseCount = () => {
    if (this.state.count === 5) {
      this.setState({
        error: true,
        count: 0,
      });
    } else {
      this.setState((prevState, prevProps) => ({
        count: prevState.count + 1,
      }));
    }
  };
  changeError = () => {
    this.setState({
      error: false,
    });
  };

  render() {
    const { error } = this.state;
    const result = error ? (
      <React.Fragment>
        <h1>Something Wrong</h1>
        <button onClick={this.changeError}>Try Again</button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h1>Press me, but stop at five!</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increaseCount}>Click me</button>
      </React.Fragment>
    );
    return <div>{result}</div>;
  }
}
