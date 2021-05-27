import React, { Component } from 'react'
import Clock from '../clock/clock.component'
export default class DisplayClock extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true,
    }
  }
  deleteClock=()=>{
    this.setState((state,props)=>({
      show:!this.state.show
    }))
  }
  render() {
    return (
      <div>
        {
          this.state.show?<Clock></Clock>:<h1>Clock Removed</h1>
        }
        <br/>
        <button onClick={this.deleteClock}>{this.state.show?'Delete Clock':'Mount Clock'}</button>
      </div>
    )
  }
}