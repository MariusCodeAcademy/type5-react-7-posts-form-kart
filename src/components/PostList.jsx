import PostItem from './PostItem';

export default function PostList(props) {
  console.log(props.items);
  // generuoti  <PostItem /> is props.items ir paduoti jiems title, body, author
  return (
    <div>
      I am a PostList
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

// sugeneruoti PostItems is gautu posts masyvo objektu
