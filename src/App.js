import './App.css';
import FormList from './components/FormList';
import Header from './components/Header';
import PostList from './components/PostList';
// importuoti posts masyva is data/posts.js
import initPosts from './data/posts';
// peruodi ji i PostList componenta

function App() {
  // console.log('initPosts ===', initPosts);
  return (
    <div className='App'>
      <Header />
      <h1>App</h1>
      <main className='content'>
        <PostList items={initPosts} />
        <FormList />
      </main>
    </div>
  );
}

export default App;
