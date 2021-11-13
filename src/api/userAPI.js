import axios from 'axios'

const rootUrl = process.env.NODE_ENV === "production" ? process.env.ROOT_URL : "http://localhost:8000/api/v1"
const userApi = rootUrl + "/user";

export const createUser = async info => {
    try {
        const { data } = await axios.post(userApi , info)
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: "error",
            message: error.message,
        }
        
    }
}
export const VerifyNewUser = async newUser => {
    try {
        const { data } = await axios.patch(userApi + "/email-verification", newUser)
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: "error",
            message: error.message,
        }
        
    }
}
export const loginUser = async info => {
	try {
		const { data } = await axios.post(userApi + "/login", info);
		return data;
	} catch (error) {
		console.log(error);
		return {
			status: "error",
			message: "Invalid login details",
		};
	}
};
export const logoutUser = async tokens => {
	try {
		const { data } = await axios.post(userApi + "/logout", tokens);
		return data;
	} catch (error) {
		return {
			status: "error",
			message: "Error, unable to process your request, Please try again later",
		};
	}
};
