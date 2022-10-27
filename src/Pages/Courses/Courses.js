import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses[0])
    const generatePDF = () => {
        var doc = new jsPDF('p', 'pt');
        doc.addFont('helvetica', 'normal')
        doc.text(20, 20, `Name of the Certificate is ${courses[0].title}`)
        doc.text(20, 40, `Duration is in Hours ${courses[0].duration}`)
        doc.text(20, 60, `Cost in USD is ${courses[0].fee}`)
        doc.text(20, 80, `Trainer Name is ${courses[0].trainer}`)
        console.log(courses)
        doc.save('demo.pdf')
    }

    return (
        <div>
            <div>
                <h3>Course Information || ID NO: {courses[0]._id}</h3>
                <button onClick={generatePDF} type="primary">Download PDF</button>
            </div>

            <Card >
                <Card.Img variant="top" src={courses[0].img} />
                <Card.Body>
                    <Card.Title><Link style={{ textDecoration: 'none' }} >{courses[0].details}</Link></Card.Title>
                    <Card.Text>

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