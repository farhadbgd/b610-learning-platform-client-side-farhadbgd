import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseInCard from '../CourseInCard/CourseInCard';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(response => response.json())

            .then(data => setCourses(data));

    }, []);

    return (
        <div className='my-5'>
            {
                courses.map(course => <h2
                    className='my-4'
                    key={course.id}>
                    <Link style={{ textDecoration: 'none' }} to={`/courses/${course.id}`}>{course.name}</Link>
                </h2>)
            }

        </div>
    );
};

export default LeftSideNav;