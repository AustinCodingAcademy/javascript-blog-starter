import React, { Component }  from 'react';
import axios from 'axios';
import './PostDetail.css'


class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gistData: [],
    }
  };

  componentWillMount() {
    axios.get(this.props.url)
      .then((res) => {
        console.log(res.data);
        this.setState({gistData: res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <pre className="gist">
        {this.state.gistData}
      </pre>
    );
  }
}

export default PostDetail;
