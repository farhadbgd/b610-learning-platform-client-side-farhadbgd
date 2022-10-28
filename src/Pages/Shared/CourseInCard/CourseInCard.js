import React from 'react';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseInCard = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-farhadbgd.vercel.app/courses')
            .then(response => response.json())

            .then(data => setCourses(data));

    }, []);

    return (


        <div className="d-flex flex-wrap justify-content-evenly  m-4">
            {
                courses.map(course => <div
                    key={course.id}
                    className="m-2"
                >

                    <Card style={{ width: '18rem', height: '10rem' }} >
                        <Card.Img variant="top" src={courses[0].img} />
                        <Card.Body className='style'>

                            <Card.Title><Link style={{ textDecoration: 'none' }} to={`/courses/${course.id}`}>ID NO: {course._id}</Link></Card.Title>
                            <Link to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>

                                <Card.Text >
                                    {course.couresName}
                                </Card.Text>
                            </Link>

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