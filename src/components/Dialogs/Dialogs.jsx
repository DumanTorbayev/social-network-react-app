import React from 'react';
import css from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={css.item}>
            <NavLink className={css.link} to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={css.dialog}>
            {props.message}
        </div>
    )
};

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Alik'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Nargiz'},
        {id: 4, name: 'Aisulu'},
    ];

    let messagesData = [
        {id: 1, message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {id: 3, message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: 4, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    ];

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={css.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    )
};

export default Dialogs