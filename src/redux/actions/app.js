import {getAuthUser} from "./auth";
import {SET_INITIALIZED} from "../reducers/app";

export const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => async (dispatch) => {
    /*let promise = dispatch(getAuthUser());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })*/
    await dispatch(getAuthUser());
    dispatch(initializedSuccess());
}