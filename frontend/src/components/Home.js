import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/index.css";

// Welcome page with links to sign for an Account or to login.
const Home = () => (
  <div>
    <h2>Welcome to BST Forum</h2>
    <p>
      Please Create an Account{" "}
      <Router>
        <div>
          <nav>
            <Link to="/signup">Signup</Link>
          </nav>
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    </p>
    or
    <p>
      Login if you already have an Account{" "}
      <Router>
        <div>
          <nav>
            <Link to="/login">Login</Link>
          </nav>
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </p>
    <hr />
  </div>
);

export default Home;
