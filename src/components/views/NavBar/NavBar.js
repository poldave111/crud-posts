import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from './NavBar.module.scss';

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
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.isActive : undefined} style={{ marginRight: '10px' }}>
                            <Button variant="secondary">Home</Button>
                        </NavLink>

                        <NavLink to="/post/about" className={({ isActive }) => isActive ? styles.isActive : undefined}>
                            <Button variant="secondary">About</Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;



