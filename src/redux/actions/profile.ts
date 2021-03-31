import {profileAPI} from "../../api/api";
import {ADD_POST, SET_PHOTO, SET_STATUS, SET_USER_PROFILE} from "../reducers/profile";

type addPostActionType = {
    type: typeof ADD_POST
    addedPost: string
}

type setUserProfile = {
    type: typeof SET_USER_PROFILE
    userProfile: userProfileType
}

export type userProfileType = {
    aboutMe: string | null
    contacts: contactsType
    fullName: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: photosType
}

type contactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string |  null
    website: string | null
    youtube: string | null
}

export type photosType = {
    large: string | null
    small: string | null
}

type setStatusType = {
    type: typeof SET_STATUS
    status: string
}

type savePhotoSuccessType = {
    type: typeof SET_PHOTO
    photo: object
}

export const addPostAction = (addedPost: string): addPostActionType => ({type: ADD_POST, addedPost});
export const setUserProfile = (userProfile: userProfileType): setUserProfile => ({type: SET_USER_PROFILE, userProfile});
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photo: object): savePhotoSuccessType => ({type: SET_PHOTO, photo});

export const getUsersProfile = (userId: number) => (dispatch: any) => {
    profileAPI.getProfile(userId)
        .then((response: any) => {
            dispatch(setUserProfile(response));
        });
};

export const getUserStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then((response: any) => {
            dispatch(setStatus(response));
        });
};

export const updateUserStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};

export const savePhoto = (photo: any) => (dispatch: any) => {
    profileAPI.setUserPhoto(photo)
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
        })
}