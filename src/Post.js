import React from 'react';
import Author from "./Author"
import Comments from "./Comments"

function Post(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.text}</p>
      <Author author={props.post.author} />
      <Comments comments={props.post.comments} />
    </div>
  )
}

export default Post;