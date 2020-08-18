import {createSelector} from "reselect";

export const getUserProfile = (state) => {
    return state.profile.userProfile
}

export const getStatus = (state) => {
    return state.profile.status
}

export const getAuthorizedId = (state) => {
    return state.auth.userId
}

export const getPosts = (state) => {
    return state.profile.posts
}

// reselect selectors
/*
export const getBannedUsers = createSelector( getUsers,(users) => {
    return users.filter(u => true)
})*/
