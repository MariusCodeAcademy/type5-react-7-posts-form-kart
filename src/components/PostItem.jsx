export default function PostItem(props) {
  return (
    <div className='post-item'>
      <h3>{props.title}</h3>
      <p>
        <i>{props.author}</i>
      </p>
      <p className='body'>{props.body}</p>
    </div>
  );
}
