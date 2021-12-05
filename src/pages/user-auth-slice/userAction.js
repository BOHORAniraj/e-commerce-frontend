import { requestPending, requestFail,responseSuccess,loginFail,loginSuccess,autoLoginPending,loginAuto,userLogOutSuccess, profileUpdateSuccess, passwordUpdateSuccess, forgotPassResponse } from './userSlice'
import { createUser, VerifyNewUser, loginUser ,logoutUser, getUser, UpdateProfile, UpdatePass, resetForgetPassword } from '../../api/userAPI'
import {getNewAccessJWT, requestOtp, updateNewAccessJWT} from "../../api/tokenAPI"



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

export const userLogOut = () => async dispatch => {
	const accessJWT = window.sessionStorage.getItem("accessJWT");
	const refreshJWT = window.localStorage.getItem("refreshJWT");

	await logoutUser({ accessJWT, refreshJWT });

	window.sessionStorage.removeItem("accessJWT");
	window.localStorage.removeItem("refreshJWT");
	dispatch(userLogOutSuccess());
};

export const fetchUser = () => async dispatch => {
	dispatch(requestPending());
	const data = await getUser();

	if (data?.user === "jwt expired") {
		const token = await updateNewAccessJWT();
		if (token) {
			return dispatch(fetchUser())
		}
		else {
			dispatch(userLogOut());
		}
		return dispatch(loginSuccess(data.user));
	}
	dispatch(requestFail(data));
}

export const updateUserProfile = userInfo => async dispatch => {
	dispatch(requestPending());
	const data = await UpdateProfile(userInfo)

	if (data?.message === "jwt expired") {
		const token = await updateNewAccessJWT();

		if (token) {
			return dispatch(updateUserProfile(userInfo))
		} else {
			dispatch(userLogOut());
		}
	}
	dispatch(profileUpdateSuccess(data));
	
}

export const updateUserPassword = passInfo => async dispatch => {
	dispatch(requestPending());
	const data = await UpdatePass(passInfo)

	if (data?.message === "jwt expired") {
		const token = await updateNewAccessJWT();

		if (token) {
			return dispatch(updateUserPassword(passInfo))
		} else {
			dispatch(userLogOut());
		}
	}
	dispatch(passwordUpdateSuccess(data));
}

export const requestPassResetOtp = email => async dispatch => {
	dispatch(requestPending());
	const data = await requestOtp(email);

	dispatch(forgotPassResponse({ data, email }));
};
export const resetPasswordAction = passObj => async dispatch => {
	dispatch(requestPending());
	const data = await resetForgetPassword(passObj)

	dispatch(forgotPassResponse(data))
}