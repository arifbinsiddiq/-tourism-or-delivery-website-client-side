import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './TourOrder.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const TourOrder = () => {

    const { user } = useAuth();

    let { orderKey } = useParams();

    const [orderTour, setOrderTour] = useState({});

    useEffect(() => {
        fetch(`https://dark-dracula-64114.herokuapp.com/tourorders/${orderKey}`)
            .then(res => res.json())
            .then(data => setOrderTour(data));
    }, [orderKey])


    const { register, handleSubmit, watch, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log(watch("name"));

        axios.post('https://dark-dracula-64114.herokuapp.com/bookingusers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                console.log(res)
            })
    }


    return (
        <Container className="tour-details-section">
            <Row sm={1} md={2} lg={2}>
                <Col>
                    <div className="tour-details">
                        <h2>Tour Order Details</h2>
                        <Card>
                            <div className="tour-details-img">
                                <img src={orderTour.img} alt="" />
                            </div>
                            <Card.Body>
                                <Card.Title>{orderTour.spotName}</Card.Title>
                                <>
                                    <p>{orderTour.location}</p>
                                    <p>
                                        Trips Cost
                                        <span>$</span>
                                        {orderTour.trips_cost}
                                    </p>
                                    <p>{orderTour.description}</p>
                                </>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="booking-form">
                        <h2>Please! Booking Now</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} {...register("email")} />
                            <input {...register("spotName")} placeholder="Spot Name" />
                            <input {...register("address")} placeholder="address" />
                            <input type="number" {...register("contact")} placeholder="phone" />
                            <input className="booking-order-btn" type="submit" value="booking" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        // <div>
        //     <h1>details: {orderTour.spotName}</h1>
        //     <h2>Order: {orderKey}</h2>
        // </div>
    );
};

export default TourOrder;