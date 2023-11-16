import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Container } from 'react-bootstrap';
import shortid from 'shortid';
import { useParams, Navigate } from 'react-router';
import PostForm from '../PostForm.js/PostForm';
import { addPost, editPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { getPostById } from '../../../redux/postsRedux';

const EditPostForm = props => {
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
    console.log('editPostData', postData);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    
    if (!postData) {
        return <Navigate to="/" />;
    }
    

    const handleSubmit = postData => {
        dispatch(editPost({...postData, id}));
        navigate("/");
    }

    return (
        <>
            <PostForm action={handleSubmit} {...postData} actionButton={"Edit Post"}/>
        </>
    );
}

export default EditPostForm;