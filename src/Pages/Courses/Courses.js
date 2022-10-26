import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses[0])
    return (
        <div>
            <h1>This is Courses Page: {courses.length}</h1>
            <Card >
                <Card.Img variant="top" src={courses[0].image_url} />
                <Card.Body>
                    <Card.Title><Link style={{ textDecoration: 'none' }} >{courses[0].details}</Link></Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div className="d-grid gap-2">

                        <Button variant="dark" size="lg">
                            <Link style={{ textDecoration: 'none' }} to={`/checkout/${courses[0].course_id}`}> Get Premium Access</Link>
                        </Button>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Courses;