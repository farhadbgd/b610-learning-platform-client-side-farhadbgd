import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(response => response.json())

            .then(data => setCourses(data));

    }, []);

    return (
        <div>
            <h1>COURSES: {courses.length}</h1>

            {
                courses.map(course => <h2
                    key={course.id}>
                    <Link to={`/courses/${course.id}`}>{course.name}</Link>
                </h2>)
            }


        </div>
    );
};

export default LeftSideNav;