
import React, {useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory,useLocation } from "react-router-dom";
import { Card, Form, Button,Spinner,Alert } from 'react-bootstrap'
import {UserLogin ,autoLogin} from '../user-auth-slice/userAction'

const initialState = {
    email:"qaq@gmail.com",
    password:"12345678",
}
const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { isLoggedIn, isPending, userLoginResp } = useSelector(state => state.user)


    const [loginInfo, setLoginInfo] = useState(initialState);

    const from = location?.state?.from?.pathname || "/home";

    useEffect(() => {
        !isLoggedIn && dispatch(autoLogin());

        isLoggedIn && history.replace(from);
	}, [isLoggedIn, history, dispatch, from]);





    const handleOnChange = e => {
		const { name, value } = e.target;
		setLoginInfo({
			...loginInfo,
			[name]: value,
		});
	};


    const handleOnSubmit = e => {
		e.preventDefault();
		const { email, password } = loginInfo;

		if (!email && !password) {
			return alert("You must provide both the email and password");
		}
		dispatch(UserLogin(loginInfo));
	};
    return (
        <div className="register-page mb-5">
            <Card className="p-3 reg-form">
                <h2>LOGIN</h2>
                {isPending && <Spinner variant="primary" animation="border" />}
				{userLoginResp?.message && (
					<Alert
						variant={userLoginResp.status === "success" ? "success" : "danger"}
					>
						{userLoginResp.message}
					</Alert>
				)}
            <hr />
            <Form className="mt-3" onSubmit={handleOnSubmit}>
                
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="youremail@email.com"
                            required
                            value={loginInfo.email}
                            onChange = {handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="secret"
                            required
                            value={loginInfo.password}
                            onChange= {handleOnChange}
                    />
                </Form.Group>
                

                <Button type = "submit" variant="success">LOGIN</Button>
                </Form>
                <a href ="/registration">Register Now</a>
        </Card>

        
    </div>
    )
}
export default Login