import React from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function App() {
//   return <div className="App">Hello World!</div>;
// }

// export default App;

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/Login">Login</Link>
      </nav>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
    </div>
  </Router>
);
export default App;
