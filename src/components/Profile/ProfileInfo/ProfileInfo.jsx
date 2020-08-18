import React from 'react';
import css from './ProfilrInfo.module.scss'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user-picture.png";
import ProfileStatus from "./ProfileStatus";
import {useSelector} from "react-redux";
import {getUserProfile} from "../../../redux/selectors/profiles";

const ProfileInfo = () => {
    const userProfile = useSelector((state) => getUserProfile(state));

    return (
        <>
            {!userProfile
                ? <Preloader/>
                : <div className={css.profile}>
                    <div className={css.user}>
                        <div className={css.imgWrap}>
                            <div>
                                <img src={userProfile.photos.small !== null ?
                                    userProfile.photos.small :
                                    userPhoto} alt=""/>
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