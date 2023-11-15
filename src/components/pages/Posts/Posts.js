import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { useSelector } from "react-redux";
import SmallPost from '../SmallPost/SmallPost';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Posts = props => {
    const posts = useSelector(state => state.posts);
    console.log('posts', posts);
    return (
        <>
            <Container>
             <Row className="justify-content-between align-items-center mx-auto" style={{ paddingTop: '4rem'}}>
                <Col>
                    <h1>All posts</h1>
                </Col>
                <Col>
                    <Link key={props.id} to="/post/add" >
                        <Button variant="outline-info">Add Post</Button>{' '}
                    </Link>
                    {/* <Nav.Link as={NavLink} to="/post/add"><Button variant="outline-dark">Add Post</Button></Nav.Link> */}
                </Col>
            </Row>
        </Container>
        <Container>
           
            <Row className="justify-content-center align-items-center" style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
                {posts.map((post) => (
                    <Col xs={12} md={6} lg={4} key={post.id} className="mb-4 my-auto">
                        <SmallPost id={post.id} title={post.title} author={post.author} shortDescription={post.shortDescription} publishedDate={post.publishedDate} />
                    </Col>
                ))}
            </Row>
        </Container>
        </>
        

    );
}

export default Posts;