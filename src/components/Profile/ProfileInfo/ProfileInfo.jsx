import React from 'react';
import css from './ProfilrInfo.module.scss'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user-picture.png";
import ProfileStatus from "./ProfileStatus";
import {useDispatch, useSelector} from "react-redux";

import {getUserProfile} from "../../../redux/selectors/profiles";
import {savePhoto} from "../../../redux/actions/profile";

const ProfileInfo = ({isOwner}) => {
    const userProfile = useSelector((state) => getUserProfile(state));
    const dispatch = useDispatch();

    const onMainPhotoSelected = e => {
        if (e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    return (
        <>
            {!userProfile
                ? <Preloader/>
                : <div className={css.profile}>
                    <div className={css.user}>
                        <div className={css.imgWrap}>
                            <div>
                                <img src={userProfile.photos.small
                                    ? userProfile.photos.small
                                    : userPhoto} alt=""/>

                                {isOwner &&
                                    <label className={css.uploadPhoto}>
                                        +
                                        <input onChange={onMainPhotoSelected} type="file"/>
                                    </label>
                                }
                            </div>
                        </div>
                        <div className={css.user_info}>
                            <div className={css.user_name}>
                                {userProfile.fullName}
                            </div>
                            <div>
                                {userProfile.user_aboutMe}
                            </div>
                            <div>
                                <div>
                                    Статус поиска работы: {userProfile.lookingForAJob
                                    ? <span>Ищу работу</span>
                                    : <span>Не ищу работу</span>}
                                </div>
                                <div>
                                    {userProfile.lookingForAJobDescription}
                                </div>
                            </div>
                            < ProfileStatus/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default ProfileInfo