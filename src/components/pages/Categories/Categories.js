import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { useSelector } from "react-redux";
import SmallPost from '../SmallPost/SmallPost';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';
import Category from '../Category/Category';
import { getPostByCategory } from '../../../redux/categoriesRedux';

const Categories = props => {
    const categories = useSelector(state => state.categories);
    
    return (
        <>
            <div className="d-flex justify-content-center">
                {categories.map((category) => (
                    <Link key={props.id} to={`/post/category/${category}`} >
                        <Button variant="outline-dark">{category}</Button>{' '}
                    </Link>
                ))}
            </div>
        </>



    );
}

export default Categories;