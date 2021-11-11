import { configureStore } from '@reduxjs/toolkit'
import  useReducer  from './pages/user-auth-slice/userSlice'
const store = configureStore({
    reducer: {
        user: useReducer,
    }
})
export default store;