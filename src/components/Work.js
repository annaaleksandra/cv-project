import React, { Component } from "react";

class Work extends Component {
  constructor() {
    super();
    this.state = {
      experiences: [],
      title: "",
      company: "",
      from: "",
      to: "",
      description: "",
    };
  }
  render() {
    return (
      <div>
        <h2>Work</h2>
        <p>{this.state.experiences}</p>
      </div>
    );
  }
}

export default Work;
