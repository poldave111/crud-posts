import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary rounded" bg="dark" variant="dark"  >
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
    );
}

export default NavBar;


