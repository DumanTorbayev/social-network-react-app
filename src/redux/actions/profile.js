import {profileAPI} from "../../api/api";
import {ADD_POST, SET_STATUS, SET_USER_PROFILE} from "../reducers/profile";

export const addPostAction = addedPost => ({type: ADD_POST, addedPost});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile });
export const setStatus = (status) => ({type: SET_STATUS, status });

export const getUsersProfile = (userId) => {

    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response));
            });
    }
};

export const getUserStatus = (userId) => {

    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response));
            });
    }
};

export const updateUserStatus = (status) => {

    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
};