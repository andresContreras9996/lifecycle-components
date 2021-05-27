import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  componentDidCatch(error){
    this.setState({
      error: true
    });
  }

  render() {
    return(<div>
        {this.state.error?<h3>Unfortunate error! try later</h3>:this.props.children}
      </div>)
  }
}
