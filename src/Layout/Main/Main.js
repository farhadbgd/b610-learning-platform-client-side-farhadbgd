import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Leftside Nav</h1>
                    </Col>
                    <Col>
                        <Outlet></Outlet>
                    </Col>
                    <Col>
                        <h1>Rightside Nav</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;