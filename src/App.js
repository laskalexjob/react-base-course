import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Js Post Title3", body: "Description" },
    { id: 2, title: "Js Post Title1", body: "Description2" },
    { id: 3, title: "Js Post Title2", body: "Description3" },
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // Get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    console.log(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort By'
          options={[
            { value: 'title', name: 'By title' },
            { value: 'body', name: 'By description' }
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title={"Posts List #1"} />
        : <h1 style={{ textAlign: 'center' }}> Post list is Empty</h1>
      }
    </div>
  );
}

export default App;
