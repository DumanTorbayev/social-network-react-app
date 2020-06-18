import React from 'react';
import css from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogsData.map( d => <DialogItems name={d.name} key={d.id} id={d.id} img={d.img}/> );
    let messageElements = props.dialogsPage.messages.map( m => <MessageItems message={m.message} key={m.id}/> );
    let newMessageText = props.dialogsPage.newMessageText;

    let onAddNewMessage = () => {
        props.addMessage()
    };

    let onWriteMessage = (event) => {
        let enterText = event.target.value;
        props.updateNewMessageText(enterText)
    };

    if(!props.isAuth) return < Redirect to={"/login"} />

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogElements}
            </div>
            <div className={css.messages}>
                {messageElements}
                <div className={css.inputWrap}>
                    <textarea onChange={onWriteMessage} value={newMessageText} placeholder="Введите сообщение"/>
                    <button onClick={onAddNewMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs