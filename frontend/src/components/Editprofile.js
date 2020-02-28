import React, { Component } from "react";
import axios from "axios";

class Editprofile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      Username: "",
      Email: "",
      Password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { FirstName, LastName, Username, Email, Password } = this.state;
    const apiUrl = "http://localhost:3001/users/profile";
    return axios.post(apiUrl, {
      FirstName,
      LastName,
      Username,
      Email,
      Password
    });
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  render() {
    const { FirstName, LastName, Username, Email, Password } = this.state;

    return (
      <React.Fragment>
        <div id="signup">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="FirstName">FirstName: </label>
              <input
                onChange={ev => this.handleChange("FirstName", ev)}
                type="text"
                id="FirstName"
                placeholder="Enter your FirstName"
                name="FirstName"
                value={FirstName}
              />
            </div>
            <div>
              <label htmlFor="LastName">LastName: </label>
              <input
                onChange={ev => this.handleChange("LastName", ev)}
                type="text"
                id="LastName"
                placeholder="Enter your LastName"
                name="LastName"
                value={LastName}
              />
            </div>
            <div>
              <label htmlFor="Username">Username: </label>
              <input
                onChange={ev => this.handleChange("Username", ev)}
                type="text"
                id="Username"
                placeholder="Enter your Username"
                name="Username"
                value={Username}
              />
            </div>
            <div>
              <label htmlFor="Email">Email: </label>
              <input
                onChange={ev => this.handleChange("Email", ev)}
                type="email"
                id="Email"
                placeholder="Enter your Email"
                name="Email"
                value={Email}
              />
            </div>
            <div>
              <label htmlFor="Password">Password: </label>
              <input
                onChange={ev => this.handleChange("Password", ev)}
                type="text"
                id="Password"
                placeholder="Enter your Password"
                name="Password"
                value={Password}
              />
            </div>

            <div action="http://localhost:3001/Profile" method="post">
              <button
                className="butupdate"
                onClick={this.handleSubmit}
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Editprofile;
