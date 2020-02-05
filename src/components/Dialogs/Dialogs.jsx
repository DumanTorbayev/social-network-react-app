import React from 'react';
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={css.item}>
                    <NavLink>Aizhana</NavLink>
                </div>
                <div className={css.item}>
                    Sveta
                </div>
                <div className={css.item}>
                    Nargiz
                </div>
                <div className={css.item}>
                    Aisulu
                </div>
                <div className={css.item}>
                    Mikhail
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.dialog}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className={css.dialog}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
                <div className={css.dialog}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
                <div className={css.dialog}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className={css.dialog}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
            </div>
        </div>
    )
};

export default Dialogs