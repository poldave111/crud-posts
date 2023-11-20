import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useParams, Navigate } from 'react-router';
import SmallPost from '../SmallPost/SmallPost';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import styles from './Categories.module.scss';
import { getPostsByCategory } from '../../../redux/postsRedux';

const Category = props => {
    const { category } = useParams(); 
    const posts = useSelector(state => getPostsByCategory(state, category));
    
    return (
        <>
            {/* {posts.map(post => console.log(post))} */}
            {posts.map(post => {
                <SmallPost {...post} />
            })}
        </>



    );
}

export default Category;