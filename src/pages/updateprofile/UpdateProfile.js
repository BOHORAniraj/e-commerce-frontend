import React ,{useState,useEffect} from 'react'
import './Updateprofile.css'
import { Form, Card, Button} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { updateUserProfile } from '../user-auth-slice/userAction'

const initialupdateState = {
    fname: "",
    lname: "",
    email: "",
    dob: "",
    phone: "",
    gender: "",
    address:"",
}






const UpdateProfile = () => {
    const dispatch = useDispatch();
    const [userpro, setUserpro] = useState(initialupdateState);

    const { userInfo } = useSelector(state => state.user)

    useEffect(() => {
        setUserpro(userInfo)
    },[userInfo])
    

    const handleOnChange = e => {
        const { name, value } = e.target;
                setUserpro({
            ...userpro,
            [name]:value,
        })
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        const { fname, lname, address, phone } = userpro
        if (
            userInfo.fname !== fname || userInfo.lname !== lname || userInfo.phone !== phone || userInfo.address !== address ) {
            if (window.confirm("Please confirm you want to update your data")) {
                console.log("from update")
                
                const updateddata = {fname,lname,address,phone}
        dispatch(updateUserProfile(updateddata))
            }
            return
        }
        alert("No Information was updated")
        
    }


    return (
        <div>
           <div className="register-page mb-5">
            <Card className="p-3 reg-form" >
            <div className="up">UPDATING PROFILE</div>
                <hr />
               

                    <Form className="formcss mt-3" onSubmit={handleOnSubmit} >
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="fname" value={userpro.fname} onChange={handleOnChange} placeholder="Jhon" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lname"  value={userpro.lname} onChange={handleOnChange} placeholder="wick" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                                name="email"
                                value={userpro.email}
                            type="email"
                            onChange={handleOnChange}
                        placeholder="youremail@email.com"
                                required
                                disabled
                    />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control name="dob" value={userpro?.dob?.substr(0,10)} type="date" onChange={handleOnChange} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>phone</Form.Label>
                    <Form.Control name="phone" value={userpro.phone} placeholder="041xxxxxxx" onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                                name="address"
                                value= {userpro.address}
                        onChange={handleOnChange}
                        
                    />
                </Form.Group>
                
                <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                        name="gender"
                        value ={userpro.gender}
                       disabled
                    />
                </Form.Group>
						
					

                <Button type = "submit" variant="success">Update</Button>
            </Form>
        </Card>

        
    </div>
        </div>
    )
}

export default UpdateProfile
