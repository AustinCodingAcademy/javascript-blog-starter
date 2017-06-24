import React from 'react';
import './PostList.css';
import PostDetail from './PostDetail.js';

function getFiles(files) {
  let urls = '';

  for (let file in files) {
    urls = files[file].raw_url;
  }
  return urls
}

function PostList(props) {
  return (
    <div className="eachpost">
      {props.posts.map((bob, i) =>
        <div key={i}>
          <div>
            <img className="profilePic" alt="profilePic" src={bob.owner.avatar_url}/>
            <p>@{bob.owner.login}</p>
          </div>
          <p><a href={bob.html_url}>{bob.description}</a> (created: <i>{bob.created_at}</i>)</p>
          <div>
            <PostDetail url={getFiles(bob.files)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default PostList
