import { requestPending, requestFail,responseSuccess,loginFail,loginSuccess,autoLoginPending,loginAuto,userLogOutSuccess } from './userSlice'
import { createUser, VerifyNewUser, loginUser } from '../../api/userAPI'
import {getNewAccessJWT} from "../../api/tokenAPI"


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

const setJWTinBrowserMemory = ({ accessJWT, refreshJWT }) => {
    window.sessionStorage.setItem("accessJWT", accessJWT);
	window.localStorage.setItem("refreshJWT", refreshJWT);
}

export const UserLogin = loginInfo => async dispatch => {
	dispatch(requestPending());

	//call api to login
	const result = await loginUser(loginInfo);
	console.log(result);

	if (result?.status === "success") {
		setJWTinBrowserMemory(result.jwts);
		return dispatch(loginSuccess(result.user));
	}

	dispatch(loginFail(result));
};

export const autoLogin = () => async dispatch => {
	dispatch(autoLoginPending(true));
	const accessJWT = window.sessionStorage.getItem("accessJWT");
	const refreshJWT = window.localStorage.getItem("refreshJWT");
	//accessJWT exist
	if (accessJWT) {
		return dispatch(loginAuto());
	}

	// accessJWT do not exist but refreshJWT exist
	if (!accessJWT && refreshJWT) {
		//call api to get refreshJWT token
		const result = await getNewAccessJWT();
		if (result?.accessJWT) {
			window.sessionStorage.setItem("accessJWT", result.accessJWT);
			return dispatch(loginAuto());
		}

		dispatch(userLogOut());
	}
};

export const userLogOut = () => dispatch => {
	window.sessionStorage.removeItem("accessJWT");
	window.localStorage.removeItem("refreshJWT");
	dispatch(userLogOutSuccess());
};
