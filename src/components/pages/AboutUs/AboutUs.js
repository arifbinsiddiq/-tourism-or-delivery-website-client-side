import React from 'react';
import './AboutUs.css';
import { Col, Container, Row } from 'react-bootstrap';
import AboutUsImg from '../../../images/about-us.jfif';

const AboutUs = () => {
    return (
        <Container className="about-section">
            <Row xs={1} sm={1} md={1} lg={2} className="g-4">
                <Col>
                    <div className="about-info">
                        <h2>About Us</h2>
                        <li>Trust and Safety</li>
                        <li>Clients Satisfaction</li>
                        <li>Top Popular Tourist Spots in Our List.</li>
                    </div>
                </Col>
                <Col>
                    <div className="about-img">
                        <img src={AboutUsImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;