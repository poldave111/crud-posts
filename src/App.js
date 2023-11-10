import { Routes, Route } from 'react-router-dom';
import Posts from './components/pages/Posts/Posts';
import Post from './components/pages/Post/Post';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import PostAdd from './components/features/PostAdd/PostAdd';
import PostEdit from './components/features/PostEdit/PostEdit';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <main>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" variant="dark">
        <Container fluid>
          {/* Left Section - Posts CRUD */}

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Navbar.Brand as={Link} to="/">Posts CRUD</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              {/* Add more CRUD links as needed */}
            </Nav>

            {/* Right Section - Home and About Links */}
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/post/about" className="nav-link">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit:id" element={<PostEdit />} />
        <Route path="/post/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;


