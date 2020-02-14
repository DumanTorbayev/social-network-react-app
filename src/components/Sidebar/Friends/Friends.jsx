import React from 'react'
import css from './Friends.module.scss'

const Friends = (props) => {
    return (
        <div className={css.items}>
            <div className={css.avatar}>
                <img src={props.img} alt=""/>
            </div>
            <div className={css.name}>
                {props.name}
            </div>
        </div>
    )
};

export default Friends