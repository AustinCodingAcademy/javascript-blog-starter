import React from "react";
import PostPreview from "./PostPreview";

// eslint-disable-next-line
function ListOfPosts(props) {
  return (
    <div>
      {props.posts.map((post, i) =>
        <PostPreview
          key={i}
          post={post}
        />
      )}
    </div>
  );
}

export default ListOfPosts;
