import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { deleteCard } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { Button, Container, Modal } from 'react-bootstrap';
import styles from './Post.module.scss';
import ModalPost from '../../common/Modal/Modal';

const Post = props => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const postData = useSelector(state => getPostById(state, id)); // musi nazywać się tak samo jak w route w App.js, czyli tutaj po prostu - id
    const [showModal, setShowModal] = useState(false);

    const handleDeleteButton = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        dispatch(deleteCard(id));
    }

    const handleModalCancel = () => {
        setShowModal(false);
    }


    if (!postData) return <Navigate to="/" />
    else return (
        <Container>
            {showModal && <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>By choosing delete you will permanently delete this post.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseModal}>Delete</Button>
                        <Button variant="secondary" onClick={handleModalCancel}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>}
            <div className="d-flex justify-content-between mt-3">
                <div><h1>{postData.title}</h1></div>
                <div>
                    <Link key={props.id} to={`/post/edit/${id}`} style={{ width: '100px', textDecoration: 'none', color: 'inherit' }}><Button variant="outline-secondary">Edit</Button>{' '}</Link>
                    <Button variant="outline-danger" onClick={handleDeleteButton} style={{ width: '100px' }}>Delete</Button>{' '}
                </div>
            </div>
            <div className="px-5 mb-4">
                <div><strong>Author: </strong>{postData.author}</div>
                <div><strong>Published: </strong>{postData.publishedDate}</div>
                <div>{postData.content}</div>
            </div>
        
        </Container>
    );
}

export default Post;