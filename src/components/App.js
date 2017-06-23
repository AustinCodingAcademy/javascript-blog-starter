import React, { Component } from "react";
import Header from "./Header.js";
import ListOfPosts from "./ListOfPosts";
// import PostPreview from "./PostPreview";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      apiPicture: "",
      apiPostTitle: "",
      apiPostPreview: "",

    };
  }

  componentWillMount() {
    axios.get("https://api.github.com/users/juanmata0012/gists")
      .then((response) => {
        this.setState({apiPicture: response.data[0].owner.avatar_url});
        this.setState({results: response.data});
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={this.state.apiPicture} className="heroimg" alt="picture" />
          <div className="Name">
            <Header/>
          </div>
        </div>

        <div>
          <div>
            <ListOfPosts posts={this.state.results} />
          </div>
        </div>

      </div>


    );
  }
}

export default App;
