import React from 'react';
import { useParams, Navigate } from 'react-router';
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";

const Post = props => {
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id)); // musi nazywać się tak samo jak w route w App.js, czyli tutaj po prostu - id

    if(!postData) return <Navigate to="/" />
    return (
        <h1>Post</h1>
    );
  }
  
  export default Post;