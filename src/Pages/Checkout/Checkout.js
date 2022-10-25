import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courses = useLoaderData();
    console.log(courses[0])
    return (
        <div>
            <h1>Checkout page</h1>
        </div>
    );
};

export default Checkout;

