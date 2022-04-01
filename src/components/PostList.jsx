import PostItem from './PostItem';

export default function PostList(props) {
  console.log(props.items);
  // generuoti  <PostItem /> is props.items ir paduoti jiems title, body, author
  // <PostItem /> turi tilpti 3 i viena eilute ir buti su css graziai apipavidalinti(border, shadow, pading ir pan)
  return (
    <div className='post-list'>
      {props.items.map((pObj) => (
        <PostItem
          key={pObj.id}
          title={pObj.title}
          author={pObj.author}
          body={pObj.body}
          id={pObj.id}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}

// sugeneruoti PostItems is gautu posts masyvo objektu
