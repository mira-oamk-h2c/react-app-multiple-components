import React from 'react';
import Post from "./Post";
import './App.css';

function App() {
  const post = {
    title: "Test post",
    text: "This is a really nice post...",
    author: {
      fname: "Mira",
      lname: "Eerikäinen",
      date: "22.3.2021"
    },
    comments: {
      comment: {
        by: "Test user",
        text: "Good job",
        date: "23.3.2021"
      }
    }
  }

  
  return (
    <Post post={post} />
  );
}

export default App;
