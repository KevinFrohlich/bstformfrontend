import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
// import Cookie from "js-cookie";

const apiUrl = "http://localhost:3001/posts";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PostId: "",
      PostTitle: "",
      PostBody: ""
    };
    this.handleChange = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePosts = this.deletePosts.bind(this);
  }

  handleClick = event => {
    this.setState({ PostId: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .delete(`http://localhost:3001/posts/:id/delete/${this.state.PostId}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push("/posts");
      });
  };

  deletePosts(PostId) {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.PostId !== PostId)
    }));
  }

  componentDidMount() {
    this.renderPosts();
  }

  renderPosts = async () => {
    try {
      let res = await axios.get(apiUrl, {});
      let posts = res.data;
      // this will re render the view with new data
      this.setState({
        Posts: posts.map((post, i) => (
          <ul key={i}>
            <li>
              <p>{post.PostId}</p>
              <p>
                <strong>Title: </strong>
                {post.PostTitle}
              </p>
              <strong>Post: </strong>
              {post.PostBody}
            </li>
            <li>
              <p>
                <strong>Post: </strong>
              </p>
              <Link to="/Editposts">
                <p>{post.PostId}</p>
                <button className="butupdate" type="submit" value="submit">
                  Update
                </button>
              </Link>
            </li>
            <li>
              <div>
                <form onDelete={this.deletePosts}>
                  <button
                    className="postdel"
                    type="submit"
                    value="Submit"
                    onDelete={this.deletePosts}
                  >
                    Delete
                  </button>{" "}
                  :Delete Posts from Board
                </form>
              </div>
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
        <div className="col-3-3">
          <h2>Posts:</h2>

          <div>
            <ul>{this.state.Posts}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
