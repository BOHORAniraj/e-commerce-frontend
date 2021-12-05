import React, {useState ,useEffect} from 'react'
import { Card, Form, Button, Spinner, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { requestPassResetOtp } from '../user-auth-slice/userAction';
import { useHistory } from 'react-router-dom'



const Forgetpass = () => {
    const history = useHistory ();
    const dispatch = useDispatch();

    const {isPending , forgotPassRes} =  useSelector(state => state.user)


    const [emailid, setEmailid] = useState("");

    const handleOnChange = e => {
        const { value } = e.target;
        setEmailid(value)
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        if (!emailid) {
            return alert("Email required")
        }
         history.push('./forgotpasswordForm')

        dispatch(requestPassResetOtp(emailid))
    }




    return (
        <div className="register-page mb-5">
            <Card className="p-3 reg-form">
                <div className="title">FORGOT PASSWORD</div>
                {isPending && <Spinner variant="primary" animation="border" />}
				{forgotPassRes?.message && (
					<Alert variant={forgotPassRes?.status === "success" ? "success" : "danger"}>{forgotPassRes?.message}</Alert>)}
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
               
                

                    <Button className="Forgetpass" type="submit"  variant="success">Request OTP</Button>
                    <br />
                    <Button className="Forgetpass mt-3" variant="success"><a href="/login">Log IN</a></Button>
                    
                    
                </Form>
                
                
        </Card>

        
    </div>
    )
}

export default Forgetpass;
