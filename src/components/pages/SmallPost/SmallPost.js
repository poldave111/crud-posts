import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';

const SmallPost = props => {
    console.log('props.id', props.id);
    console.log('small post publishedDate', props.publishedDate);

    return (
        
        <div className="mb-3 ">
             <Card style={{ width: '18rem'}} className="mb-4 m-4 p-2">
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <div><strong>Author: </strong>{props.author}</div>
                        <div><strong>Published: </strong>{props.publishedDate}</div>
                        <div><strong>Category: </strong>{props.selectedCategory}</div>
                        <div>{props.shortDescription}</div>
                    </Card.Text>
                    <Link key={props.id} to={`/post/${props.id}`} >
                        <Button variant="dark">Read more</Button> 
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SmallPost;