import Icon from './UI/Icon';

export default function PostItem(props) {
  function deleteHandler() {
    // console.log('buvo paspausta delete', props.id);
    props.onDelete(props.id);
  }

  return (
    <div className='post-item'>
      <p>post id: {props.id}</p>
      <h3>{props.title}</h3>
      <p>
        <i>{props.author}</i>
      </p>
      <p className='body'>{props.body}</p>
      <button onClick={deleteHandler}>
        <Icon icon='fa-trash-o' />
      </button>
    </div>
  );
}
