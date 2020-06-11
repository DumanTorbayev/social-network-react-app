import React from 'react';
import css from './ProfilrInfo.module.scss'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user-picture.svg";

const ProfileInfo = (props) => {

    if (!props.userProfile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className={css.profile}>
            <div className={css.user}>
                <div className={css.imgWrap}>
                    <div>
                        <img src={props.userProfile.photos.small !== null ?
                            props.userProfile.photos.small :
                            userPhoto} alt=""/>
                    </div>
                </div>
                <div className={css.user_info}>
                    <div className={css.user_name}>
                        {props.userProfile.fullName}
                    </div>
                    <div>
                        {props.userProfile.user_aboutMe}
                    </div>
                    <div>
                        <div>
                            Статус поиска работы: {props.userProfile.lookingForAJob ? <span>Ищу работу</span> :
                            <span>Не ищу работу</span>}
                        </div>
                        <div>
                            {props.userProfile.lookingForAJobDescription}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo