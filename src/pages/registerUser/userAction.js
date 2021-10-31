import { requestPending, requestFail,responseSuccess } from './userSlice'
import {createUser , VerifyNewUser} from '../../api/userAPI'


export const userRegister = newUser => async dispatch => {
    dispatch(requestPending());
    console.log(newUser);

    const result = await createUser(newUser)

    result?.status === "success" ? dispatch(responseSuccess(result)) : dispatch(requestFail(result))




}
export const userEmailVerification = newObj => async dispatch => {
    dispatch(requestPending());
    console.log(newObj);

    const result = await VerifyNewUser(newObj)

    result?.status === "success" ? dispatch(responseSuccess(result)) : dispatch(requestFail(result))




}