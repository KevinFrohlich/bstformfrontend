import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Admin extends Component {
  state = { usersFound: [] };

  fetchUsersFound = () => {
    const apiUrl = "http://localhost:3001/users/admin";
    return axios.get(apiUrl).then(response => {
      this.setState(() => {
        return {
          usersFound: response.data
        };
      });
    });
  };

  componentDidMount() {
    this.fetchUsersFound();
  }

  render() {
    console.log(this.state.usersFound);
    if (this.state.usersFound.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const users = this.state.usersFound.map(user => (
      <ul key={user.UserId}>
        <li>
          <div>
            <p>{user.UserId}</p>
            <p>
              {user.FirstName} {user.LastName}
            </p>
            <Link to="/Adminedituser">
              <button type="submit">View</button>
            </Link>
          </div>
        </li>
      </ul>
    ));
    return <div>{users}</div>;
  }
}

export default Admin;
