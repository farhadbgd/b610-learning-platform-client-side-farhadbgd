import React from 'react';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseInCard = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(response => response.json())

            .then(data => setCourses(data));

    }, []);

    return (


        <div className="d-flex flex-wrap justify-content: center my-5">
            {
                courses.map(course => <div
                    key={course.id}
                    className="m-2"
                    style={{ width: '18rem' }}
                >

                    <Card >
                        <Card.Body>
                            <Card.Title><Link style={{ textDecoration: 'none' }} to={`/courses/${course.id}`}>{course.id}</Link></Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <Link style={{ textDecoration: 'none' }} to={`/courses/${course.id}`}>{course.name}</Link>
                        </Card.Footer>
                    </Card>
                </div>)
            }
        </div>



    );
};

export default CourseInCard;