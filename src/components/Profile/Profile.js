import React from 'react';
import './profile.css'

const Profile = () => {
    return (
        <main className="content">
            <div className="banner-img">
                <img src="http://tse4.mm.bing.net/th?id=ORT.TH_470633631&pid=1.12&eid=G.470633631" alt=""/>
            </div>
            <div className="user-info">
                <img src="https://images.pexels.com/users/avatars/60607/trinity-kubassek-387.jpeg?w=256&h=256&fit=crop&crop=faces" alt=""/>
            </div>
            <div className="posts">
                <div className="new-posts">

                </div>
                <div className="previous-posts">
                    <div className="posts-1">

                    </div>
                    <div className="posts-2">

                    </div>
                </div>
            </div>
        </main>
    )
};

export default Profile