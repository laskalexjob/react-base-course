import React, { useState } from "react";
import PostItem from "./components/PostItem";
import './styles/App.css'
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Js Post Title", body: "Description" },
    { id: 2, title: "Js Post Title2", body: "Description2" },
    { id: 3, title: "Js Post Title3", body: "Description3" },
    { id: 4, title: "Js Post Title4", body: "Description4" },
  ])

  return (
    <div className="App">
      

      {
        posts.map(post => 
          <PostItem post={post} key={ post.id } />
          )
      }
    </div>
  );
}

export default App;
