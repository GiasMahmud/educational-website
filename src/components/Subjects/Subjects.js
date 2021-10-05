import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Subject from "../Subject/Subject";

import './Subjects.css';

const Subjects = () => {
    const [Subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./subjects.JSON')
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, [])

    return (
        <Container>
            <h1 className="mb-1 mt-5 fw-bold">
                <span className="color-dark">Our</span>{" "}
                <span className="color-orrange">Programs</span>
            </h1>
            <div className="break-line mx-auto mb-3"></div>
            {Subjects.length ? (
                <Row xs={1} md={3} lg={4} className="g-4 mb-5">
                    {Subjects.map((subject) => (
                        <Subject key={subject.id} subject={subject}></Subject>
                        // <Subject key={Subject.id} Subject={Subject}></Subject>
                    ))}
                </Row>
            ) : (
                <Spinner className="my-5" animation="border" variant="secondary" />
            )}
        </Container>
    );
};

export default Subjects;