import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmployeeNumber: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Username: "",
      Password: ""
    };
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstChange = event => {
    this.setState({
      FirstName: event.target.value
    });
  };

  handleLastChange = event => {
    this.setState({
      LastName: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      Email: event.target.value
    });
  };

  handleUserChange = event => {
    this.setState({
      Username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      Password: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await (this.state.FirstName,
      this.state.LastName,
      this.state.Email,
      this.state.Username,
      this.state.Password);
      this.props.history.push("/signup");
    } catch (event) {
      alert(event.message);
    }
    const { FirstName, LastName, Email, Username, Password } = this.state;
    const apiUrl = "http://localhost:3001/users/signup";
    return axios
      .post(apiUrl, {
        FirstName,
        LastName,
        Email,
        Username,
        Password
      })
      .then(res => {
        alert("Sign up successfull, Please Login.");
        this.props.history.push("/login");
      });
  };
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <div className="grid">
        <h2>Please sign up</h2>
        <div className="col-1-3">
          <React.Fragment>
            <form
              id="signup"
              name="signup"
              method="POST"
              onSubmit={this.handleSubmit}
            >
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  name="FirstName"
                  value={this.state.FirstName}
                  onChange={this.handleFirstChange}
                  required
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="LastName"
                  value={this.state.LastName}
                  onChange={this.handleLastChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="me@example.com"
                  value={this.state.Email}
                  onChange={this.handleEmailChange}
                  required
                />
              </div>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  name="Username"
                  value={this.state.Username}
                  onChange={this.handleUserChange}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="Password"
                  value={this.state.Password}
                  onChange={this.handlePasswordChange}
                  required
                />
              </div>
              <br />
              <div>
                <button type="submit" value="Submit">
                  Submit
                </button>
              </div>
            </form>
          </React.Fragment>
        </div>
        <hr />
      </div>
    );
  }
}

export default Signup;
