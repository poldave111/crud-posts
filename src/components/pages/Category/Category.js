import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useParams, Navigate } from 'react-router';
import SmallPost from '../SmallPost/SmallPost';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import styles from './Categories.module.scss';
import { getPostsByCategory } from '../../../redux/postsRedux';
import { dateToStr } from '../../../utils/dateToStr';

const Category = props => {
    const { category } = useParams();
    const posts = useSelector(state => getPostsByCategory(state, category));

    return (
        <Container>
            <Row className="justify-content-center">
                {posts.map(post => {
                    const formattedDate = dateToStr(post.publishedDate)
                    return (<Col key={post.id} xs={12} md={4}>
                        <SmallPost id={post.id} title={post.title} author={post.author} shortDescription={post.shortDescription} publishedDate={formattedDate} selectedCategory={post.category} className="mb-3" />
                    </Col>)
                }
                    
                )}
            </Row>
        </Container>
    );
}

export default Category;