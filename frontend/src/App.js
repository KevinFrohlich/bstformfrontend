import React from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Posts from "./components/Posts";
import Editposts from "./components/Editdrafts";
import Editdrafts from "./components/Editdrafts";
import Editprofile from "./components/Editprofile";
import Imageupload from "./components/Imageupload";
import AdminEditUser from "./components/Adminedituser";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//creating the Navbar links and routes to the links
const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/posts" component={Posts} />
      <Route path="/admin" component={Admin} />
      <Route path="/editposts" component={Editposts} />
      <Route path="/editdrafts" component={Editdrafts} />
      <Route path="/editprofile" component={Editprofile} />
      <Route path="/imageupload" component={Imageupload} />
      <Route path="/adminedituser" component={AdminEditUser} />
    </div>
  </Router>
);

export default App;

// function App() {
//   return <div className="App">Hello World!</div>;
// }

// export default App;
