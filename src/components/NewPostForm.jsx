import { useState, useEffect } from 'react';

export default function NewPostForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [formValid, setFormValid] = useState(false);

  const tLen = title.length;
  const aLen = author.length;
  const bLen = body.length;

  useEffect(() => {
    // console.log('useEffect ran NewPostForm', title.length, author.length, body.length);
    if (tLen && aLen && bLen) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [tLen, aLen, bLen]);

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
        <button disabled={!formValid} type='submit'>
          {formValid ? 'Create' : 'Fill Form inputs'}
        </button>
      </form>
    </div>
  );
}

// sukurti forma su inputais  NewPostForm
// surinkti inptutu values i objekta NewPostForm
