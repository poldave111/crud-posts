import React, {useState, useEffect} from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch} from "react-redux";
import shortid from 'shortid';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    // State to hold form data
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publishedDate: '',
        shortDescription: '',
        content: '',
    });

    const handleChange = (e) => {
        // const key = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target;
        setFormData({...formData, [name]: value });
    }

    useEffect(() => {
        console.log(formData)
    }   
    ,[formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('target', e.target);
        dispatch(addPost({...formData, id: shortid()}));
        navigate("/");
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* Single-line fields */}
                <Row className="mb-3">
                    <Form.Group as={Row} controlId="field1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" name="title" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Row} controlId="field2">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Enter author" name="author" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Row} controlId="field3">
                        <Form.Label>Published</Form.Label>
                        <Form.Control type="text" placeholder="Enter date" name="publishedDate" onChange={handleChange} />
                    </Form.Group>
                </Row>

                {/* Larger fields */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="largerField1">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Leave a comment here" name="shortDescription" onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="largerField2">
                        <Form.Label>Main content</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Leave a comment here" name="content" onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddPostForm;