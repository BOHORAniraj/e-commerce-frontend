import React,{useState} from 'react'
import './ResetPass.css'
import { Button,Spinner,Alert} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserPassword } from '../user-auth-slice/userAction'

const initialPassword = {
    currentPassword:"",
    password:"",
    confirmPassword:"",
}

const initialPassError = {
    isMatched: false,
    isLength: false,
    Lowercase: false,
    Uppercase: false,
    HasNumber: false,
    Specialchar: false,
}

export const ResetPass = () => {
    const dispatch = useDispatch();

    const [updatePassword, setUpdatedPassword] = useState(initialPassword)
    const [passError,setPassError] = useState(initialPassError)

    const { isPending,userUpdateResp } = useSelector(state => state.user)
    

    const handleOnChange = e => {
        const { name, value } = e.target;
        let isMatched = false;
        if (name === "password") {
            setPassError({
                ...passError,
                isMatched:updatePassword.confirmPassword === value,
            })  
        }
        if (name === "confirmPassword") {
            isMatched = updatePassword.password === value;
            const isLength = value.length >= 8;
            const Lowercase = /[a-z]/.test(value);
            const Uppercase = /[A-Z]/.test(value);
            const HasNumber = /[0-9]/.test(value);
            const Specialchar = /[!,@,#,$,%,^,&,*,(,),_]/.test(value);

            setPassError({
                ...passError,
                isMatched,
                isLength,
                Lowercase,
                Uppercase,
                HasNumber,
                Specialchar,
            })
            
        }
        setUpdatedPassword({
            ...updatePassword,
            [name]:value,
        })
    }



    const handleOnSubmit = e => {
        e.preventDefault();

        const { currentPassword, password } = updatePassword;
        dispatch(updateUserPassword({currentPassword,password}))

    }



    return (
        <div className="niraj">
            {isPending && <Spinner variant="primary" animation="border" />}

{userUpdateResp?.message && (
    <Alert
        variant={userUpdateResp?.status === "success" ? "success" : "danger"}
    >
        {userUpdateResp?.message}
    </Alert>
)}
            <form onSubmit={handleOnSubmit}>
            <div className="neeru">
            <div className="karuna">
                <input name="currentPassword" type="password" onChange={handleOnChange} required/>
                <label > Current Password</label>
            </div>
            <div className="karuna">
                <input name="password" type="password" onChange={handleOnChange} required/>
                <label >New Password</label>
            </div>
            <div className="karuna">
                <input name="confirmPassword" type="password" onChange={handleOnChange} required/>
                <label >Confirm Your New Password</label>
            </div>

                </div>
               
                <Button type="submit">SUBMIT</Button>
            </form>
        </div>
    )
}

export default ResetPass
