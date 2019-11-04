import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import css from './profile.module.css'

const Profile = () => {
    return (
        <main className={css.content}>
            <div className={css.headBg}>
                <img src="http://tse4.mm.bing.net/th?id=ORT.TH_470633631&pid=1.12&eid=G.470633631" alt=""/>
            </div>
            <div className={css.user}>
                <img src="https://images.pexels.com/users/avatars/60607/trinity-kubassek-387.jpeg?w=256&h=256&fit=crop&crop=faces" alt=""/>
            </div>
            <MyPosts/>
        </main>
    )
};

export default Profile