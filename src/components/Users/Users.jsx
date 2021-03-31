import React, {useEffect} from 'react';
import css from './Users.module.scss';
import Pagination from 'rc-pagination';
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Common/Preloader/Preloader";
import {requestUsers, requestUsersPage} from "../../redux/actions/users";
import User from "./User";

const Users = () => {
    const users = useSelector((state) => getUsers(state));
    const isLoaded = useSelector((state) => getIsFetching(state));
    const pageSize = useSelector((state) => getPageSize(state));
    const currentPage = useSelector((state) => getCurrentPage(state));
    const totalUsersCount = useSelector((state) => getTotalUsersCount(state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize));
    }, [])

    const onPageChanged = (pageNumber) => {
        dispatch(requestUsersPage(pageNumber, pageSize))
    };

    return (
        <>
            {isLoaded
                ? <Preloader/>
                : <div>
                    <div className={css.users_wrap}>
                        { users.map(userData => <User key={userData.id} {...userData} />) }
                    </div>
                    <Pagination
                        onChange={onPageChanged}
                        defaultPageSize={pageSize}
                        defaultCurrent={currentPage}
                        total={totalUsersCount}
                        hideOnSinglePage={true}
                    />
                </div>
            }
        </>
    )
};

export default Users;