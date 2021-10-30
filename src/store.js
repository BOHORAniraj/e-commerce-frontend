import { configureStore } from '@reduxjs/toolkit'
import  useReducer  from './pages/registerUser/userSlice'
const store = configureStore({
    reducer: {
        user: useReducer,
    }
})
export default store;