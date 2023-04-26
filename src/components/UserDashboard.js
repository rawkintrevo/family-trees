import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UserDashboard = (props) => {

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{props.user.name}</Card.Title>
                            <Card.Text>
                                Email: {props.user.email}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Button variant="primary">Edit Profile</Button>
                </Col>
                <Col md={8}>
                    <h3>Your Media</h3>
                    {props.media.map((item) => (
                        <div key={item.id}>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <img src={item.imageUrl} alt={item.title} />
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default UserDashboard;
