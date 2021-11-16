import { Button, Container ,Row } from 'react-bootstrap';
import React, {useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUser } from '../user-auth-slice/userAction';
import './userProfile.css'
import { Link } from 'react-router-dom';
const UserProfile = () => {
    const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user)
    
    useEffect(() => {
      if (!userInfo._id) {
          dispatch(fetchUser())
        }
    },[userInfo])
  return (
      <Container>
      <Row>
      <div>
<div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                    <div className="mt-3">
                    <h4>WELCOME {userInfo.fname }</h4>
                      
                    </div>
                  </div>
                </div>
                </div>
                    
                </div>
            </div>
            
        <div className="col-md-8">
        <div className="card mb-3 ">
          <div className="card-body ">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">First Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {userInfo.fname }
                </div>
                
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Last Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {userInfo.lname }
                </div>
                
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                  {userInfo.email}
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Gender</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {userInfo.gender }
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {userInfo.phone }
              </div>
            </div>
            <hr/>
            
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {userInfo.address }
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Date of birth</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                  {userInfo.dob}
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-12">
              <Link className="top-nav-item" to="/updateProfile">EDIT</Link>
              </div>
            </div>
          </div>
    </div>
    </div>
        </div>
      </Row>
      </Container>
        
           
    )
}

export default UserProfile
