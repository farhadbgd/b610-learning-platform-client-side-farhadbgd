import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courses = useLoaderData();
    console.log(courses[0])
    return (
        <div>
            <h1>Checkout page</h1>
            <Container>
                <Row>
                    <Col lg={'4'}>

                    </Col>
                    <Col lg={'4'}>
                        <h1 >{courses[0].title}</h1>
                    </Col>
                    <Col lg={'4'}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;

