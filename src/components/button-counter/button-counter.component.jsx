import React, { Component } from "react";

export default class ButtonCounter extends Component {
  //usualmente, agregar una propiedad al state, llamada error que sera la responsable de renderizar bajo condiciones aceptadas
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increaseCount = () => {
    this.setState((prevState, prevProps) => ({
      count: prevState.count + 1,
    }));
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 5) {
      throw new Error("Something wrong");
    }
    return true;
  }

  render() {
    return (
      <div>
        <h1>Press me, but stop at five!</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increaseCount}>Click me</button>
      </div>
    );
  }
}
