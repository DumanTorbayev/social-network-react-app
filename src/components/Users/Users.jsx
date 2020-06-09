import React from 'react';
import css from './Users.module.scss';
import userPhoto from '../../assets/images/user-picture.svg';
import Pagination from 'rc-pagination';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return (
        <div>
            <div className={css.users_wrap}>
                {
                    props.users.map(u => <div className={css.users__media} key={u.id}>
                        <div className={css.users__img}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div className={css.users__userInfo}>
                            <span className={css.users__name}>
                                {u.name}
                            </span>
                            <span className={css.users__status}>
                                {u.status}
                            </span>
                        </div>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    props.userUnFollow(u.id)
                                }}>un follow</button>
                                : <button onClick={() => {
                                    props.userFollow(u.id)
                                }}>follow</button>
                        }
                        <div className={css.users__viewProfile}>
                            <NavLink to={`/profile/${u.id}`}>View Profile</NavLink>
                        </div>
                    </div>)
                }
            </div>
            <Pagination
                onChange={props.onPageChanged}
                defaultPageSize={props.pageSize}
                defaultCurrent={props.currentPage}
                total={props.totalUsersCount}
                hideOnSinglePage={true}
            />
        </div>

    )
};

export default Users;