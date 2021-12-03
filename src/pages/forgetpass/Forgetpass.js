import React, {useState ,useEffect} from 'react'
import { Card, Form, Button,Spinner,Alert } from 'react-bootstrap'

const Forgetpass = () => {


    const [emailid, setEmailid] = useState("");

    const handleOnChange = e => {
        const { value } = e.target;
        setEmailid(value)
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        console.log("request otp from server")
    }




    return (
        <div className="register-page mb-5">
            <Card className="p-3 reg-form">
                <div className="title">FORGOT PASSWORD</div>
                {/* {isPending && <Spinner variant="primary" animation="border" />}
				{userLoginResp?.message && (
					<Alert
						variant={userLoginResp.status === "success" ? "success" : "danger"}
					>
						{userLoginResp.message}
					</Alert>
				)} */}
            <hr />
            <Form className="mt-3" onSubmit={handleOnSubmit}>
                
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="youremail@email.com"
                            required
                            value={emailid}
                            onChange = {handleOnChange}
                    />
                </Form.Group>
               
                

                    <Button className="Forgetpass" type="submit" variant="success">Request OTP</Button>
                    <br />
                    <Button className="Forgetpass mt-3" variant="success"><a href="/login">Log IN</a></Button>
                    
                    
                </Form>
                
                
        </Card>

        
    </div>
    )
}

export default Forgetpass;
