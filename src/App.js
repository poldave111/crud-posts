import { Routes, Route } from 'react-router-dom';
import Posts from './components/pages/Posts/Posts';
import Post from './components/pages/Post/Post';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import PostAdd from './components/features/PostAdd/PostAdd';
import EditPostForm from './components/pages/EditPostForm/EditPostForm';
import Header from './components/views/Header/Header';
import Container from 'react-bootstrap/Container';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <main>
      <Container>
      <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<EditPostForm />} />
          <Route path="/post/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>

    </main>
  );
}

export default App;


