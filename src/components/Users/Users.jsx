import React from 'react';
import css from './Users.module.scss';
import userPhoto from '../../assets/images/user-picture.svg';
import Pagination from 'rc-pagination';

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
                                    props.usersUnFollow(u.id)
                                }}>un follow</button>
                                : <button onClick={() => {
                                    props.usersFollow(u.id)
                                }}>follow</button>
                        }
                        <div className={css.users__location}>
                        <span>
                            {'u.location.country'}
                        </span>
                            <span>
                            {'u.location.city'}
                        </span>
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