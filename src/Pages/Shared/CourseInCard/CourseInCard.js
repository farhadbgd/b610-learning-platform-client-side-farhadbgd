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
                >

                    <Card style={{ width: '18rem', height: '14rem' }}>
                        <Card.Body>
                            <Card.Title><Link style={{ textDecoration: 'none' }} to={`/courses/${course.id}`}>{course._id}</Link></Card.Title>
                            <Card.Text>
                                {course.couresName}
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <Link style={{ textDecoration: 'none' }} to={`/courses/${course.id}`}>{course.fee}</Link>
                        </Card.Footer>
                    </Card>
                </div>)
            }
        </div>



    );
};

export default CourseInCard;