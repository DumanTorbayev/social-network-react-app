import React from 'react';
import css from "./Users.module.scss";
import userPhoto from "../../assets/images/user-picture.png";
import {NavLink} from "react-router-dom";
import {follow, unFollow} from "../../redux/actions/users";
import {useDispatch, useSelector} from "react-redux";
import {getFollowingInProgress} from "../../redux/selectors/users";

const User = ({photos, name, status, id, followed}) => {
    const followingInProgress = useSelector((state) => getFollowingInProgress(state));
    const dispatch = useDispatch();

    const handleFollow = (id) => {
        dispatch(follow(id));
    }

    const handleUnFollow = (id) => {
        dispatch(unFollow(id));
    }

    return (
        <div className={css.users__media}>

            <div className={css.users__img}>
                <img src={photos.small !== null ? photos.small : userPhoto} alt=""/>
            </div>
            <div className={css.users__userInfo}>
                <div className={css.users__name}>
                    {name}
                </div>
                <div className={css.users__status}>
                    {status}
                </div>
            </div>
            {followed
                ? <button disabled={followingInProgress.some(id => id === id)}
                          onClick={() => handleUnFollow(id)}
                >
                    un follow
                </button>
                : <button disabled={followingInProgress.some(id => id === id)}
                          onClick={() => handleFollow(id)}
                >
                    follow
                </button>
            }
            <div className={css.users__viewProfile}>
                <NavLink to={`/profile/${id}`}>View Profile</NavLink>
            </div>
        </div>
    );
};

export default User;