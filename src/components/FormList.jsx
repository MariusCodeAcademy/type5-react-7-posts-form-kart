import NewPostForm from './NewPostForm';

export default function FormList(props) {
  return (
    <div>
      <NewPostForm onNewPost={props.onNewPost} />
    </div>
  );
}
