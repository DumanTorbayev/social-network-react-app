import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {
            id: 1,
            message: "Lorem Ipsum is simply dummy text of the",
            likesCount: 12,
        },
        {
            id: 2,
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            likesCount: 5,
        },
        {
            id: 3,
            message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            likesCount: 45,
        },
        {
            id: 6,
            message: "И вот я здесь",
            likesCount: 125,
        },
    ],
    userProfile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Date.now(),
                message: action.addedPost,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

// Action Creators
export const addPostAction = addedPost => ({type: ADD_POST, addedPost});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile });
export const setStatus = (status) => ({type: SET_STATUS, status });


// This is Thunk

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

export default profileReducer;