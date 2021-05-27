import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props){
    super(props)

    this.state={
      date: new Date(),
      count:0,
    }
  }

  componentDidMount(){
    this.intervalID=setInterval(()=>{
      this.tick();
    },1000)
  }
  componentDidUpdate(prevProps,prevState,snapShot){
    if(this.state.date!==prevState.date){
      this.setState((state,props)=>({
        count:state.count+1
      }))
    }
  }
  componentWillUnmount(){
    clearInterval(this.intervalID);
    alert('Clock will unmount')
  }

  tick=()=>{
    this.setState({
      date: new Date(),
    })
  }
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>It is{this.state.date.toLocaleTimeString()}</h2>
        <h3>This component is updated {this.state.count} times</h3>
      </div>
    )
  }
}
