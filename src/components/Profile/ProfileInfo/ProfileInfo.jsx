import React from 'react';
import css from './ProfilrInfo.module.scss'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.userProfile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className={css.profile}>
            <div className={css.headBg}>
                <img src="http://tse4.mm.bing.net/th?id=ORT.TH_470633631&pid=1.12&eid=G.470633631" alt=""/>
            </div>
            <div className={css.user}>
                <div className={css.imgWrap}>
                    <img src={props.userProfile.photos.small} alt=""/>
                </div>
                <div className={css.user_info}>
                    <div className={css.name}>{props.userProfile.fullName}</div>
                    {props.userProfile.aboutMe}
                    <div className={css.work_status}>
                        <div>
                            Статус поиска работы: {props.userProfile.lookingForAJob ? <div>Ищу работу</div> : <div>Не ищу работу</div>}
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