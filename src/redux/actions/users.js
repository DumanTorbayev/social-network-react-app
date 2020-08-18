import {usersAPI} from "../../api/api";
import {
  FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS,
  UN_FOLLOW
} from "../reducers/users";

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setCurrentPages = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (currentPage, pageSize) => {

  return (dispatch) => {

    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      })
  }
};

export const requestUsersPage = (pageNumber, pageSize) => (dispatch) => {

  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPages(pageNumber));
  usersAPI.getUsers(pageNumber, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    });
}

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.followUser(userId)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
        dispatch(toggleFollowingProgress(false, userId));
      }
    });
};

export const unFollow = (userId) => {

  return (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unFollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unFollowSuccess(userId));
          dispatch(toggleFollowingProgress(false, userId));
        }
      });
  }
};