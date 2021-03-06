import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {},
    isLoggedIn: false,
    userLoginResp:{},
    isPending: false,
    userUpdateResp: {},
    userRegisterResponse: {},
    isAutoLoginPending: false,
    forgotPassRes: {},
    passwordResettingEmail:"",
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        requestPending: state => { state.isPending = true },

        responseSuccess: (state, { payload }) => {
            state.isPending = false;
            state.userRegisterResponse = payload || {};
        },

        loginSuccess: (state, { payload }) => {
            state.userInfo = payload;
            state.userLoginResp = {};
            state.isLoggedIn = true;
            state.isPending = false;
        },
        userLogOutSuccess: state => {
			state.userInfo = {};
			state.isLoggedIn = false;
			state.isAutoLoginPending = false;
		},
        loginFail: (state, { payload }) => {
            state.isPending = false;
            state.userLoginResp = payload || {};
        },

        requestFail: (state, { payload } ) => {
    state.isPending = false;
    state.userRegisterResponse = payload || {};
        },
        loginAuto: state => {
			state.isLoggedIn = true;
			state.isAutoLoginPending = false;
		},
        autoLoginPending: (state, { payload }) => {
			state.isAutoLoginPending = payload;
        },
        profileUpdateSuccess: (state, { payload }) => {
            state.userUpdateResp = payload;
            state.isPending = false;
        },
        passwordUpdateSuccess: (state, { payload }) => {
            state.userUpdateResp = payload ;
            state.isPending = false;
        },
        forgotPassResponse: (state,{payload}) => {
            state.isPending = false;
            state.forgotPassRes = payload || {};
            state.passwordResettingEmail = payload.email;

            
        },

    }
})
const { reducer, actions } = userSlice;

export const {requestPending, loginSuccess,loginFail,requestFail,responseSuccess,loginAuto,autoLoginPending,userLogOutSuccess,profileUpdateSuccess,passwordUpdateSuccess,forgotPassResponse} = actions

export default reducer;
