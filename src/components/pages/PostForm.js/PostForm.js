import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { deleteCard } from '../../../redux/postsRedux';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import ModalPost from '../../common/Modal/Modal';

const PostForm = props => {

    
    // const [formData, setFormData] = useState({
    //     title: props.title || '',
    //     author: props.author || '',
    //     publishedDate: props.publishedDate || '',
    //     shortDescription: props.shortDescription || '',
    //     content: props.content || '',
    // });
    console.log('props title', props.title);
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    console.log(title);
    // const handleChange = (e) => {
    //     // const key = e.target.name;
    //     // const value = e.target.value;
    //     const {name, value} = e.target;
    //     setFormData({...formData, [name]: value });
    // }

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title, author, publishedDate, shortDescription, content });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* Single-line fields */}
                <Row className="mb-3">
                    <Form.Group as={Row} controlId="field1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Row} controlId="field2">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Enter author" name="author" value={author} onChange={e => setAuthor(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Row} controlId="field3">
                        <Form.Label>Published</Form.Label>
                        <Form.Control type="text" placeholder="Enter date" name="publishedDate" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
                    </Form.Group>
                </Row>

                {/* Larger fields */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="largerField1">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Leave a comment here" name="shortDescription" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="largerField2">
                        <Form.Label>Main content</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Leave a comment here" name="content" value={content} onChange={e => setContent(e.target.value)} />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    {props.actionButton}
                </Button>
            </Form>
        </Container>
    );
}


export default PostForm;