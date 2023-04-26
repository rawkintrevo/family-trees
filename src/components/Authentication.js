import { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Authentication = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('login attempted')
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            console.log('success(?)')
        } catch (error) {
            setError(error.message);
            console.log(error.message)
        }
    };

    return (
        <Card>
            <Card.Title>Please Login</Card.Title>
            <Form onSubmit={handleLogin}>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Card>
    );
};

export default Authentication;
