import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      degrees: {
        degree: "",
        school: "",
      },
      degree: "",
      school: "",
      from: "",
      to: "",
      description: "",
    };
  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        <form>
          <h3>Add New Education</h3>
          <div>
            <label>Degree</label>
            <input type="text" id="degree" />
          </div>
          <div>
            <label>School</label>
            <input type="text" id="school" />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Education;
