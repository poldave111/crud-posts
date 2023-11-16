import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { useSelector } from "react-redux";
import SmallPost from '../SmallPost/SmallPost';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Posts.module.scss';

const Posts = props => {
    const posts = useSelector(state => state.posts);
    console.log('posts', posts);
    return (
        <>
            <div className="d-flex justify-content-between mb-4 mx-5 mt-3">
                <h1 className="mb-3">All posts</h1>
                <Link key={props.id} to="/post/add" >
                    <Button variant="outline-dark">Add Post</Button>{' '}
                </Link>
            </div>

            <div className="d-flex justify-content-center">
                {posts.map((post) => (
                    <SmallPost id={post.id} title={post.title} author={post.author} shortDescription={post.shortDescription} publishedDate={post.publishedDate} className="mb-3" />
                ))}
            </div>
        </>



    );
}

export default Posts;