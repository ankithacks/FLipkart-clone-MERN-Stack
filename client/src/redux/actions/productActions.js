import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

const URL="http://localhost:5000"

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.response });
    }
};


export const getProductsDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})

        const {data}=await axios.get(`${URL}/products/${id}`)
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response }); 
    }
}

