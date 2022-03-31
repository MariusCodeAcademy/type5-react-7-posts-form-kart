import './App.css';
import FormList from './components/FormList';
import Header from './components/Header';
import PostList from './components/PostList';
// importuoti posts masyva is data/posts.js
// peruodi ji i PostList componenta

function App() {
  return (
    <div className='App'>
      <Header />
      <h1>App</h1>
      <PostList />
      <FormList />
    </div>
  );
}

export default App;
