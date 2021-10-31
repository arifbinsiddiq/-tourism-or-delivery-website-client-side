import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopSpots.css';

const TopSpots = () => {

    const [ topSpots, setTopSpots ] = useState([]);

    useEffect(() => {
        fetch("https://dark-dracula-64114.herokuapp.com/tourorders")
            .then(res => res.json())
            .then(data => setTopSpots(data))
    }, [])

    return (
        <Container className="top-spots-section">
            <h1 className="top-tourist-heading">top tourist spot in sylhet</h1>
            <Row xs={1} sm={1} md={1} lg={2} className="g-4">
                {
                    topSpots?.map(topSpot =>
                        <Col
                            key={topSpot?._id}
                        >
                            <Card>
                                <div className="top-spot-img">
                                    <img src={topSpot?.img} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="top-spot-title">{topSpot.spotName}</Card.Title>
                                    <>
                                        <p>{topSpot.location}</p>
                                        <p>{topSpot?.description.slice(0,120)}</p>
                                        <Link to={`/tourorder/${topSpot._id}`}>
                                        <button className="top-spots-btn">booking now</button>
                                        </Link>
                                    </>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }

            </Row>
        </Container>
    );
};

export default TopSpots;