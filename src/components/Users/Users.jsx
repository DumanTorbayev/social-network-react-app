import React from 'react';
import css from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/no-avatar.png';
import Pagination from 'rc-pagination';


/*const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div className={css.users_wrap}>
            {
                props.users.map(u => <div className={css.users__media} key={u.id}>
                    <div className={css.users__left}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    props.usersUnFollow(u.id)
                                }}>un follow</button>
                                : <button onClick={() => {
                                    props.usersFollow(u.id)
                                }}>follow</button>
                        }

                    </div>
                    <div className={css.users__right}>
                        <div className={css.users__userInfo}>
                                <span className={css.users__name}>
                                    {u.name}
                                </span>
                            <span>
                                    {u.status}
                                </span>
                        </div>
                        <div className={css.users__location}>
                                <span>
                                    {'u.location.country'}
                                </span>
                            <span>
                                    {'u.location.city'}
                                </span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
};*/

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        console.log(pageNumber);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {

        return (
            <div className={css.users_wrap}>
                {
                    this.props.users.map(u => <div className={css.users__media} key={u.id}>
                        <div className={css.users__left}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.usersUnFollow(u.id)
                                    }}>un follow</button>
                                    : <button onClick={() => {
                                        this.props.usersFollow(u.id)
                                    }}>follow</button>
                            }

                        </div>
                        <div className={css.users__right}>
                            <div className={css.users__userInfo}>
                                <span className={css.users__name}>
                                    {u.name}
                                </span>
                                <span>
                                    {u.status}
                                </span>
                            </div>
                            <div className={css.users__location}>
                                <span>
                                    {'u.location.country'}
                                </span>
                                <span>
                                    {'u.location.city'}
                                </span>
                            </div>
                        </div>
                    </div>)
                }
                <Pagination
                    onChange={this.onPageChanged}
                    defaultPageSize={this.props.pageSize}
                    defaultCurrent={this.props.currentPage}
                    total={this.props.totalUsersCount}
                    hideOnSinglePage={true}
                />
            </div>
        )
    }
}

export default Users;