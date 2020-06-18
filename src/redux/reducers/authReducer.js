import {authAPI} from "../../api/api";
import {toggleIsFetching} from "./usersReducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});

// This is Thunk

export const getAuthUser = () => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        authAPI.setAuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email));
                    dispatch(toggleIsFetching(false));
                }
            })
    }
};

export default authReducer;