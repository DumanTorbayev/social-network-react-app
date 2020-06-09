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
                <img src={props.userProfile.photos.small} alt=""/>
            </div>
        </div>
    )
};

export default ProfileInfo