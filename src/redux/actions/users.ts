import {usersAPI} from "../../api/api";
import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS,
    UN_FOLLOW
} from "../reducers/users";
import {photosType} from "./profile";

type usersType = {
    followed: boolean
    id: number
    name: string
    photos: photosType
    status: string | null
    uniqueUrlName: string | null
}

type setUsersType = {
    type: typeof SET_USERS
    users: usersType
}

type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}

type setCurrentPagesType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const followSuccess = (userId: number) => ({type: FOLLOW, userId});

export const unFollowSuccess = (userId: number) => ({type: UN_FOLLOW, userId});

export const setUsers = (users: usersType): setUsersType => ({type: SET_USERS, users});

export const setTotalUsersCount = (count: number): setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count});

export const setCurrentPages = (currentPage: number): setCurrentPagesType => ({type: SET_CURRENT_PAGE, currentPage});

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (currentPage: number, pageSize: number) => {

    return (dispatch: any) => {

        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then((data: any) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
};

export const requestUsersPage = (pageNumber: number, pageSize: number) => (dispatch: any) => {

    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPages(pageNumber));
    usersAPI.getUsers(pageNumber, pageSize)
        .then((data: any) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        });
}

export const follow = (userId: number) => (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followUser(userId)
        .then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
                dispatch(toggleFollowingProgress(false, userId));
            }
        });
};

export const unFollow = (userId: any) => (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unFollowUser(userId)
        .then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
                dispatch(toggleFollowingProgress(false, userId));
            }
        });
};