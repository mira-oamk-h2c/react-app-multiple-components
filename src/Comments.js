import React from 'react';

function Comments(props) {
  return (
    <div>
      <h3>Comments</h3>
      <p>{props.comments.comment.text}</p>
      <p>{props.comments.comment.date} by {props.comments.comment.by}</p>
    </div>
  )
}

export default Comments;