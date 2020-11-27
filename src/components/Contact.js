import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Anna",
      phone: "0123456789",
      email: "anna@gmail.com",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>Phone {this.state.phone}</h2>
        <h2>Email {this.state.email}</h2>
      </div>
    );
  }
}

export default Contact;
