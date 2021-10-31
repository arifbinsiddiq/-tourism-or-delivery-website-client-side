import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TouristGallery.css';

const TouristGallery = () => {
    return (
        <Container className="tourist-gallery-section">
            <h2 className="tourist-gallery-heading">Tourist Gallery</h2>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                <Col>
                    <div className="tourist-gallery">
                        <img src="https://i.ibb.co/0Q0wdBg/01.jpg" alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="tourist-gallery">
                        <img src="https://i.ibb.co/m9zyjbJ/02.jpg" alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="tourist-gallery">
                        <img src="https://i.ibb.co/qjSCzz0/03.jpg" alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="tourist-gallery">
                        <img src="https://i.ibb.co/NmmmWs9/04.jpg" alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="tourist-gallery">
                        <img src="https://i.ibb.co/vZHWcYD/05.jpg" alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="tourist-gallery">
                        <img src="https://i.ibb.co/L6dtNM5/06.jpg" alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="tourist-gallery">
                        <img src="https://i.ibb.co/C8KvBN8/07.jpg" alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="tourist-gallery">
                        <img src="https://i.ibb.co/BLPZ9F4/08.jpg" alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="tourist-gallery">
                        <img src="https://i.ibb.co/XFQ30ND/09.jpg" alt="" />
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default TouristGallery;


/*
https://i.ibb.co/0Q0wdBg/01.jpg
https://i.ibb.co/m9zyjbJ/02.jpg
https://i.ibb.co/qjSCzz0/03.jpg
https://i.ibb.co/NmmmWs9/04.jpg
https://i.ibb.co/vZHWcYD/05.jpg
https://i.ibb.co/L6dtNM5/06.jpg
https://i.ibb.co/C8KvBN8/07.jpg
https://i.ibb.co/BLPZ9F4/08.jpg
https://i.ibb.co/XFQ30ND/09.jpg
*/
