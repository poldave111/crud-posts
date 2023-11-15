import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { deleteCard } from '../../../redux/postsRedux';
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
        dispatch(deleteCard(id));

    }

    const handleCloseModal = () => {
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
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseModal}>Delete</Button>
                        <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>}
            <div className={styles.titleSection}>
                <div><h1>{postData.title}</h1></div>
                <div>
                    <Button variant="outline-info">Edit</Button>{' '}
                    <Button variant="outline-danger" onClick={handleDeleteButton}>Delete</Button>{' '}
                </div>
            </div>
            <div><strong>Author: </strong>{postData.author}</div>
            <div><strong>Published: </strong>{postData.publishedDate}</div>
            <div>{postData.content}</div>
        </Container>
    );
}

export default Post;