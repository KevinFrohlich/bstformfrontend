import React, { Component } from "react";
import axios from "axios";
import "../App.css";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: ""
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(event) {
    this.setState({
      Email: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      Password: event.target.value
    });
  }
  onSubmit = async event => {
    event.preventDefault();
    try {
      await (this.state.Email, this.state.Password);
      alert("login successfull!");
      this.props.history.push("/login");
    } catch (event) {
      alert(event.message);
    }

    const { Email, Password } = this.state;
    const apiUrl = "http://localhost:3001/users/login";
    return axios
      .post(apiUrl, {
        Email,
        Password
      })
      .then(res => {
        console.log(res);
        const data = res.data;
        axios.defaults.headers.common["Authorization"] = data;
        sessionStorage.setItem("login", data);
        if (data) {
          this.props.history.push("/Profile");
        }
      });
  };
  onChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    const { Email, Password } = this.state;
    return (
      <React.Fragment>
        <form id="login" name="login" method="POST" onSubmit={this.onSubmit}>
          <div>
            <h2>Please Login</h2>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={Email}
              onChange={this.onChangeEmail}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={Password}
              onChange={this.onChangePassword}
              required
            />
          </div>
          <br />
          <div>
            <button type="submit" value="Submit">
              Submit
            </button>
            <br />
            <hr />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
