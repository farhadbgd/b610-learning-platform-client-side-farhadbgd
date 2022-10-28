import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-farhadbgd.vercel.app/courses')
            .then(response => response.json())

            .then(data => setCourses(data));

    }, []);

    return (
        <div className='my-5'>
            {
                courses.map(course => <h2
                    className='my-4'
                    key={course.id}>
                    <Link tyle={{ textDecoration: 'none' }} to={`/courses/${course.id}`} className="d-grid gap-2 my-5"><Button variant="primary">{course.name}</Button>{' '}</Link>

                </h2>)
            }

        </div>
    );
};

export default LeftSideNav;