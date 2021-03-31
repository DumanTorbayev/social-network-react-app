import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";
import css from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorizedId} from "../../redux/selectors/profiles";
import {getUsersProfile, getUserStatus} from "../../redux/actions/profile";

const Profile = ({match, history}) => {
    let userId = match.params.userId;
    const authorizedUserId = useSelector((state) => getAuthorizedId(state));
    const dispatch = useDispatch();

    useEffect(() => {

        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                history.push('/users')
            }
        }

        dispatch(getUsersProfile(userId));
        dispatch(getUserStatus(userId));
    }, [userId]);

    return (
        <div className={css.profileContainer}>
            <ProfileInfo isOwner={!match.params.userId}/>
            <MyPosts/>
        </div>
    )
};

export default withRouter(Profile);