import React, { Component } from "react";
import axios from "axios";
import { getJwt } from "./helpers/jwt";

class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    };
  }
  // If JWT token is missing after mounting send back to login page.
  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push("/Login");
    }
    axios
      .get("http://localhost:3001/users/getUser", {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      .then(res =>
        this.setState({
          user: res.data
        })
      )
      // If there is an error then remove the JWT token from the localstorage and send user back to login.
      .catch(err => {
        localStorage.removeItem("jwt");
        this.props.history.push("/Login");
      });
  }
  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}
export default Authentication;
