import React, { Component } from "react";

export default class Authentication extends Component {
  render() {
    return <div>Authentication Page</div>;
  }
}

// import React, { Component } from "react";
// import axios from "axios";
// import { getJWT } from "./helpers/Jwt";

// class Authentication extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: undefined
//     };
//   }

//   componentDidMount() {
//     const jwt = getJwt();
//     if (!jwt) {
//       this.props.history.push("/Login");
//     }
//     axios
//       .get("apiUrl + /users/?", { headers: { Authorization: `Bearer ${jwt}` } })
//       .then(res =>
//         ressetState({
//           user: res.data
//         })
//       )
//       .catch(err => {
//         localStorage.removeItem("jwt");
//         this.props.history.push("/Login");
//       });
//   }
//   render() {
// if (this.state.user == undefined) {
//     return (
//         <div><h1>Loading...</h1></div>
//     );
// }
//     return <div>
//     {this.props.children}
// </div>;
//   }
// }
