import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";
import SmallPost from '../SmallPost/SmallPost';

const Posts = props => {
    const posts = useSelector(state => state.posts);
    console.log('posts', posts);
    return (
        <Container>
      <Row className="justify-content-center align-items-center" style={{ paddingTop: '8rem', paddingBottom: '8rem'}}>
        {posts.map((post, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4 my-auto">
            <SmallPost id={post.id} title={post.title} author={post.author} shortDescription={post.shortDescription} publishedDate={post.publishedDate} />
          </Col>
        ))}
      </Row>
    </Container>

    );
}

export default Posts;