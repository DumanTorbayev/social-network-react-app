import {createSelector} from "reselect";

export const getUserProfile = (state) => {
    return state.profilePage.userProfile
}

export const getStatus = (state) => {
    return state.profilePage.status
}

export const getAuthorizedId = (state) => {
    return state.auth.userId
}

export const getPosts = (state) => {
    return state.profilePage.posts
}

// reselect selectors
/*
export const getBannedUsers = createSelector( getUsers,(users) => {
    return users.filter(u => true)
})*/
