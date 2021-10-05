import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Subject.css';

const Subject = (props) => {
    const { picture, name } = props.subject;

    return (
        <Col>
            <Card>
                <div className="Subject-card rounded">
                    <Card.Img
                        className="Subject-img"
                        height="200px"
                        variant="top"
                        src={picture}
                    />
                    <h5 className="Subject-title fw-bold text-info">{name}</h5>
                </div>
            </Card>
        </Col>
    );
};

export default Subject;