import { Button } from 'react-bootstrap';
import React, {useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUser } from '../user-auth-slice/userAction';
import './userProfile.css'
const UserProfile = () => {
    const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user)
    
    useEffect(() => {
      if (!userInfo._id) {
          dispatch(fetchUser())
        }
    },[userInfo])
    return (
        <div>
<div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                    <h4>WELCOME {userInfo.fname }</h4>
                      
                    </div>
                  </div>
                </div>
                </div>
                    
                </div>
            </div>
            
        <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">First Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {userInfo.fname }
                </div>
                
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Last Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {userInfo.lname }
                </div>
                
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                  {userInfo.email}
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Gender</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {userInfo.gender }
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {userInfo.phone }
              </div>
            </div>
            <hr/>
            
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Address</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {userInfo.address }
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Date of birth</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                  {userInfo.dob}
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-12">
                <Button>Edit</Button>
              </div>
            </div>
          </div>
    </div>
    </div>
        </div>
           
    )
}

export default UserProfile
