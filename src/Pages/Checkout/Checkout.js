import React from 'react';
import { Button, Col, Container, Image, NavLink, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {
    const courses = useLoaderData();
    const navigate = useNavigate();
    console.log(courses[0])

    const notify = () => toast('Your have taken the course successfully! Thank you')

    const buyButton = () => {
        notify();

    }

    return (
        <div >
            <Container className='my-5'>
                <Row>
                    <Col lg={'4'}>

                    </Col>
                    <Col lg={'4'}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={courses[0].img} />
                            <Card.Body>
                                <Card.Title>{courses[0].title}</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Hours : {courses[0].duration}</ListGroup.Item>
                                <ListGroup.Item>Fee : ${courses[0].fee}</ListGroup.Item>
                                <ListGroup.Item>Trainer : {courses[0].trainer}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <div >
                                    <NavLink onClick={buyButton} className="d-grid"><Button variant="success">Buy Now</Button>{' '}</NavLink>
                                    <Toaster />
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col lg={'4'}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;

