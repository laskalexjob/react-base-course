import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Js Post Title", body: "Description" },
    { id: 2, title: "Js Post Title2", body: "Description2" },
    { id: 3, title: "Js Post Title3", body: "Description3" },
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Name of post"/>
        <input type="text" placeholder="Description of post"/>
        <MyButton disabled>Create Post</MyButton>
      </form>
      <PostList posts={posts} title={ "Posts List #1" } /> 
    </div>
  );
}

export default App;
