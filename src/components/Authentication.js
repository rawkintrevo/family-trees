import { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();
        console.log('login attempted')
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
            console.log('success(?)')
        } catch (error) {
            setError(error.message);
            console.log(error.message)
        }
    };

    return (
        <div className="auth-background">
            <Card className="auth-card">
                <Card.Body>
                    <h2 className="mb-4">Sign In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSignIn}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Authentication;
