import React from 'react';

function Author(props) {
  return (
    <div>
      <p>{props.author.date} by {props.author.fname}</p>
    </div>
  )
}

export default Author;