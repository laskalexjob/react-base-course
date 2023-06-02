import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Js Post Title", body: "Description" },
    { id: 2, title: "Js Post Title2", body: "Description2" },
    { id: 3, title: "Js Post Title3", body: "Description3" },
    { id: 4, title: "Js Post Title4", body: "Description4" },
  ])

  return (
    <div className="App">
      <PostList posts={posts}/> 
    </div>
  );
}

export default App;
