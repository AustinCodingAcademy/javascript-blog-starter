import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PostList from './PostList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gistRes: [],
    }
  };

  componentWillMount() {
    axios.get('https://api.github.com/users/mymonstermaggie/gists')
      .then((res) => {
        console.log(res.data);
        this.setState({gistRes: res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Delightful Gist Blog of Maggie</h2>
        </div>
        <div className="body">
          <PostList posts={this.state.gistRes}/>
        </div>
      </div>
    );
  }
}

export default App;
