import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './TourList.css';

const TourList = () => {

    const [showTourList, setShowTourList] = useState();

    useEffect(() => {
        fetch('https://dark-dracula-64114.herokuapp.com/bookingusers')
            .then(res => res?.json())
            .then(data => setShowTourList(data))

    }, [])


    return (
        <div>
            <Container>
                <h1>All user tour list</h1>
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

                            showTourList?.map(item =>
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
        </div>
    );
};

export default TourList;