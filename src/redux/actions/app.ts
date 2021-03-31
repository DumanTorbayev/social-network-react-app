import {getAuthUser} from "./auth";
import {SET_INITIALIZED} from "../reducers/app";

type initializedSuccessType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = (): initializedSuccessType => ({type: SET_INITIALIZED});

export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuthUser());
    dispatch(initializedSuccess());
}