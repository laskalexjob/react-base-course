import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Js Post Title", body: "Description" },
    { id: 2, title: "Js Post Title2", body: "Description2" },
    { id: 3, title: "Js Post Title3", body: "Description3" },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={ createPost } />
      <PostList posts={posts} title={"Posts List #1"} />
    </div>
  );
}

export default App;
