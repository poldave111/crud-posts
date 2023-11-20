import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
const PostForm = props => {

    
    // const [formData, setFormData] = useState({
    //     title: props.title || '',
    //     author: props.author || '',
    //     publishedDate: props.publishedDate || '',
    //     shortDescription: props.shortDescription || '',
    //     content: props.content || '',
    // });

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentErr, setContentErr] = useState(false);
    const [publishedDateErr, setPublishedDateErr] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    // const handleChange = (e) => {
    //     // const key = e.target.name;
    //     // const value = e.target.value;
    //     const {name, value} = e.target;
    //     setFormData({...formData, [name]: value });
    // }
    const categories = useSelector(state => state.categories); 

    console.log('state bez cateries', categories);
   
    const dispatch = useDispatch(); 
    
    const handleSubmit = e => {
        //e.preventDefault();
        setContentErr(!content); // if field empty - set error to true
        setPublishedDateErr(!publishedDate);
        if(content && publishedDate) {
            props.action({ title, author, publishedDate, shortDescription, content });
        }
    };

    // const handleCategoryChange = (e) => {
    //     setSelectedCategory(e.target.value);
    //     dispatch(setCategory(e.target.value));
    // }

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    return (
        <Container>
            <Form onSubmit={validate(handleSubmit)} className="px-5 pt-3">
             
                    <Form.Group className="mb-3 px-3" as={Row} controlId="field1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                             {...register("title", { required: true, minLength: 3 })}
                             value={title}
                             onChange={e => setTitle(e.target.value)}
                             type="text" placeholder="Enter title"
                           />
                           {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
                    </Form.Group>

                    <Form.Group className="mb-3 px-3" as={Row} controlId="field2">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            {...register("author", { required: true, minLength: 3 })}
                            type="text"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            placeholder="Enter author"
                        />
                        {errors.author && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}       
                    </Form.Group>

                    <Form.Group className="mb-3 px-3" as={Row} controlId="field3">
                        <Form.Label>Published</Form.Label>
                        <Form.Control type="text" placeholder="Enter date" name="publishedDate" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
                        {publishedDateErr && <small className="d-block form-text text-danger mt-2">Published date can't be empty</small>}
                    </Form.Group>

                     <Form.Group className="mb-3 px-3" as={Row} controlId="field4">
                        <Form.Label>Category</Form.Label>
                        <Form.Control 
                            as="select"
                            value={selectedCategory}
                            onChange={(e) => {setSelectedCategory(e.target.value)}}
                        >
                            <option value="" disabled>Select a category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group> 

                <Row className="mb-3 px-1">
                    <Form.Group as={Col} controlId="largerField1">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control 
                            {...register("shortDescription", {required: true, minLength: 20 })}
                            as="textarea" rows={4} 
                            placeholder="Leave a comment here" 
                            value={shortDescription} 
                            onChange={e => setShortDescription(e.target.value)} />
                            {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Title is too short (min is 20)</small>} 
                    </Form.Group>
                </Row>

                <Row className="mb-3 px-1">
                    <Form.Group as={Col} controlId="largerField2">
                        <Form.Label>Main content</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Leave a comment here" name="content" value={content} onChange={e => setContent(e.target.value)} />
                        {contentErr && <small className="d-block form-text text-danger mt-2">Content date can't be empty</small>}
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