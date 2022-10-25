import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseInCard from '../../Pages/Shared/CourseInCard/CourseInCard';
import LeftSideNav from '../../Pages/Shared/LeftSideNav/LeftSideNav';

const CourseHeading = () => {


    return (
        <div>
            <Container>
                <Row>
                    <Col lg={'3'}>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg={'9'}>
                        <CourseInCard></CourseInCard>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CourseHeading;