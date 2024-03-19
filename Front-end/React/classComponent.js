import React, { Component } from "react";
import { render } from "react-dom";
class FirstComponent extends Component {
  render() {
    return <div>Hello, {this.props.name}! I am a FirstComponent.</div>;
  }
}
render(<FirstComponent name={"User"} />, document.getElementById("content"));
