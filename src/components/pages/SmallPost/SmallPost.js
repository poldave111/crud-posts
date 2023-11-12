import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SmallPost = props => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <div><strong>Author: </strong>{props.author}</div>
                        <div><strong>Published: </strong>{props.publishedDate}</div>
                        <div>{props.shortDescription}</div>
                    </Card.Text>
                    <Button variant="primary">Read more</Button>
                </Card.Body>
            </Card>
        </>

    );
}

export default SmallPost;