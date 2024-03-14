import axios from 'axios';

const URL='http://localhost:5000'

export const authenticateSignup=async (data)=>{
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log("error while fetching api from backend", error)
    }
}



export const authenticateLogin=async (data)=>{
    try {
        return axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("error while fetcing api of login")
        return error.response
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${URL}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}