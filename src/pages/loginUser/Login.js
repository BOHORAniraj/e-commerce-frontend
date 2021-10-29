
import React from 'react'
import { Card, Form ,Button } from 'react-bootstrap'

const Login = () => {
    return (
        <div className="register-page mb-5">
            <Card className="p-3 reg-form">
            <h2>LOGIN</h2>
            <hr />
            <Form className="mt-3">
                
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="youremail@email.com"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="secret"
                        required
                    />
                </Form.Group>
                

                <Button variant="success">LOGIN</Button>
                </Form>
                <a href ="/registration">Register Now</a>
        </Card>

        
    </div>
    )
}
export default Login