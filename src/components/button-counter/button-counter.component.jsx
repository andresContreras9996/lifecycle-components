import React, { Component } from 'react'

export default class ButtonCounter extends Component {

  constructor(){
    super();
    this.state={
      count:0,
    }
  }
  increaseCount=()=>{
    this.setState((prevState,prevProps)=>({
      count:prevState.count+1,
    }))
  }

  render() {
    if(this.state.count>5){
      throw new Error('Number greater than Five!!!');
    }
    return (
      <div>
        <h1>Press me, but stop at five!</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increaseCount}>Click me</button>
      </div>
    )
  }
}
