import { useState } from 'react';

export default function NewPostForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    const newPostObj = {
      title: title,
      author: author,
      body: body,
    };
    // console.log('newPostObj ===', newPostObj);
    props.onNewPost(newPostObj);
  }

  return (
    <div>
      <h3>Add new post</h3>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type='text'
          placeholder='Title'
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type='text'
          placeholder='Author'
        />
        <input
          onChange={(e) => setBody(e.target.value)}
          value={body}
          type='text'
          placeholder='Body'
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

// sukurti forma su inputais  NewPostForm
// surinkti inptutu values i objekta NewPostForm
