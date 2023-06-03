import React, { useState, useRef } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Js Post Title", body: "Description" },
    { id: 2, title: "Js Post Title2", body: "Description2" },
    { id: 3, title: "Js Post Title3", body: "Description3" },
  ])

  const [title, setTitle] = useState("");
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */ }
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Name of post"
        />
        {/* <input type='text' ref={bodyInputRef}/> */}

        {/* Неуправляемый компонент */ }
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Description of post" />
        <MyButton onClick={addNewPost}>Create Post</MyButton> 
      </form>
      <PostList posts={posts} title={ "Posts List #1" } /> 
    </div>
  );
}

export default App;
