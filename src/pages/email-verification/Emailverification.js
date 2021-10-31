import React, {useEffect }from 'react'
import { useLocation } from "react-router-dom";
import { useSelector , useDispatch} from 'react-redux';
import { Alert, Spinner } from 'react-bootstrap';
import { userEmailVerification } from "../registerUser/userAction";

export const Emailverification = () =>  {
    const dispatch = useDispatch()
    const params = new URLSearchParams(useLocation().search)
    const pin = params.get("pin");
    const email = params.get("email");
    const {isPending,userRegisterResponse} = useSelector(state => state.user)

    useEffect(() => {
      dispatch(userEmailVerification({pin,email}))  
    }, [dispatch,pin,email]);



    return (
        <div className= "m-auto mt-5 py-5">
            {isPending && <Spinner variant="primary" animation="border" />}
                {userRegisterResponse?.message && (
                <Alert variant={userRegisterResponse?.status === "success" ? "success" : "danger"}>{userRegisterResponse?.message}</Alert>)}
                

            {userRegisterResponse?.message && <a href="/login"> Login now</a>}
        </div>
    )
}
