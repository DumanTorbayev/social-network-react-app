import {userProfileType} from "../actions/profile";

export const ADD_POST = 'ADD_POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const SET_PHOTO = 'SET_PHOTO';

type posts = {
    id: number | null,
    message: string | null,
    likesCount: number | null,
}

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
    ] as Array<posts>,
    userProfile: null as any | null,
    status: '' as string,
    photo: null as object | null
};

type initialStateType = typeof initialState

const profile = (state = initialState, action: any): initialStateType => {
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
        case SET_PHOTO:
            return  {
                ...state,
                userProfile: {...state.userProfile, photos:action.photo}
            }
        default:
            return state;
    }
};

export default profile;