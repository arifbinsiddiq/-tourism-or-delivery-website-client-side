import React, { useEffect, useState } from 'react';
import './Mytour.css';
import { Container, Table } from 'react-bootstrap';

const Mytour = () => {

    const email = "arifbinsiddiq1@gmail.com";
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://dark-dracula-64114.herokuapp.com/bookingusers/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    console.log(order);


    return (
        <Container>
            <h1>My tour list</h1>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>Spot Name</th>
                        <th>Contact</th>
                    </tr>
                </thead>

                <tbody>
                    {

                        order?.map(item =>
                            <tr
                                key={item._id}
                            >
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.spotName}</td>
                                <td>{item.contact}</td>
                            </tr>
                        )
                    }
                </tbody>

            </Table>
        </Container>
    );
};

export default Mytour;