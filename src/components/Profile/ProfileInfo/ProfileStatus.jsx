import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateUserStatus} from "../../../redux/actions/profile";
import {getStatus} from "../../../redux/selectors/profiles";

import css from './ProfilrInfo.module.scss'

const ProfileStatus = () => {
    const userStatus = useSelector((state) => getStatus(state));
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(userStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        setStatus(userStatus)
    },[userStatus]);

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateUserStatus(status))
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={css.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{userStatus || `Введите статус`}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true}
                    type="text"
                    value={status}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                />
            </div>
            }
        </div>
    )
};

export default ProfileStatus;