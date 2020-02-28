import React, { Component } from "react";
import "../App.css";
import axios from "axios";

const apiUrl = "http://localhost:3001/users/admin/editUser/:id";
class AdminEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: "",
      FirstName: "",
      LastName: "",
      Username: "",
      Email: ""
    };
  }

  componentDidMount() {
    this.renderUsers();
  }

  renderUsers = async () => {
    let UserId = this.state.UserId;
    try {
      let res = await axios.get(apiUrl, { UserId });
      let users = res.data;
      // this will re render the view with new data
      this.setState({
        Users: users.map((user, i) => (
          <ul key={i}>
            <li>
              <p> Id: {user.UserId}</p>
              <p>
                Name: {user.FirstName} {user.LastName}
              </p>
              <p>Username: {user.Username}</p>
              <p>Email: {user.Email}</p>
            </li>
          </ul>
        ))
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="grid">
        <div className="col-1-3">
          <div>
            <h2>Users:</h2>
          </div>
          <div className="col-2-3">
            <ul>{this.state.Users}</ul>
          </div>
        </div>
        <div>
          <form
            name="delete"
            className="red"
            method="POST"
            action="http://localhost:3001/users/admin/editUser/{{UserId}}/delete"
          >
            <button className="postdel" type="submit">
              Delete Employee
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminEditUser;
