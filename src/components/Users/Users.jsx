import React from 'react';
import css from './Users.module.scss'


const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
                fullName: 'Duman',
                followed: false,
                status: 'Путь к сердцу женщины лежит через - Честность, Верность и Внимание!',
                location: {
                    city: 'Karagandy',
                    country: 'Kazakhstan'
                }

            },
            {
                id: 2,
                photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
                fullName: 'Alik',
                followed: false,
                status: 'Даже если у вас во рту остался лишь один зуб — улыбайтесь! Улыбка — это не количество жубов, а шоштояние души!',
                location: {
                    city: 'Nur-Sultan',
                    country: 'Kazakhstan'
                }

            },
            {
                id: 3,
                photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
                fullName: 'John',
                followed: true,
                status: 'Очень важно иметь рядом с собой человека, который обнимет и скажет — все будет хорошо.',
                location: {
                    city: 'Moscow',
                    country: 'Russian Federation'
                }

            }
        ]);
    }

    return (
        <div className={css.users_wrap}>
            {
                props.users.map(u => <div className={css.users__media} key={u.id}>
                    <div className={css.users__left}>
                        <img src={u.photoUrl} alt=""/>
                        {
                            u.followed
                            ? <button onClick={() => {props.usersUnFollow(u.id)}}>un follow</button>
                            : <button onClick={() => {props.usersFollow(u.id)}} >follow</button>
                        }

                    </div>
                    <div className={css.users__right}>
                        <div className={css.users__userInfo}>
                                <span className={css.users__name}>
                                    {u.fullName}
                                </span>
                            <span>
                                    {u.status}
                                </span>
                        </div>
                        <div className={css.users__location}>
                                <span>
                                    {u.location.country}
                                </span>
                            <span>
                                    {u.location.city}
                                </span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
};

export default Users;