export default function NewPostForm() {
  return (
    <div>
      <h3>Add new post</h3>
      <form>
        <input type='text' placeholder='Title' />
        <input type='text' placeholder='Author' />
        <input type='text' placeholder='Body' />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

// sukurti forma su inputais  NewPostForm
// surinkti inptutu values i objekta NewPostForm
