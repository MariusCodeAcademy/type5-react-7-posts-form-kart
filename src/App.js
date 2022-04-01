import './App.css';
import FormList from './components/FormList';
import Header from './components/Header';
import PostList from './components/PostList';
// importuoti posts masyva is data/posts.js
import initPosts from './data/posts';
import { useState } from 'react';
// peruodi ji i PostList componenta

function App() {
  const [postsArr, setPostsArr] = useState(initPosts);

  function onDeleteHandler(idOfPostToDelete) {
    console.log('onDeleteHandler ran in App.js', idOfPostToDelete);
    setPostsArr((prevState) => {
      return prevState.filter((postObj) => postObj.id !== idOfPostToDelete);
    });
  }

  function newPostHandler(newPostObj) {
    console.log('newPostHandler in App.js', newPostObj);

    newPostObj.id = Math.random();
    // nustatyti postsArr su setPostsArr() paduodant esama postsArr + newPostObj
    // array.concat(newobj), array.slice() ...arrray
    console.log('newPostObj ===', newPostObj);
    // setPostsArr((prevState) => [...prevState, newPostObj]);
    setPostsArr((prevState) => prevState.concat(newPostObj));
  }
  return (
    <div className='App'>
      <Header />
      <h1>Posts App</h1>
      <main className='content'>
        <PostList items={postsArr} onDelete={onDeleteHandler} />
        <FormList onNewPost={newPostHandler} />
      </main>
    </div>
  );
}

export default App;
