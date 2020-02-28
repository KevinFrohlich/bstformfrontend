import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/index.css";

// Welcome page with links to sign for an Account or to login.
const Home = () => (
  <div>
    <h2>Welcome to BST Forum</h2>
    <p>Please Create an Account </p>
    <Router>
      <div>
        <nav>
          <Link to="/signup">Signup</Link>
        </nav>
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>or Login if you already have an Account</p>
    <Router>
      <div>
        <nav>
          <Link to="/Login">Login</Link>
        </nav>
        <Route path="/login" component={Login} />
      </div>
    </Router>
    <hr />
  </div>
);

export default Home;
