import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux";
import { Container } from 'react-bootstrap';
import shortid from 'shortid';
import PostForm from '../PostForm.js/PostForm';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleSubmit = formData => {
        console.log('formData', formData);
        dispatch(addPost({...formData, id: shortid()}));
        navigate("/");
    }

    return (
        <Container>
            <PostForm action={handleSubmit} actionButton={"Add Post"} />
        </Container>
    );
}

export default AddPostForm;