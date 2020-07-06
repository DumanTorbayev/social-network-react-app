import React from 'react';
import css from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../Common/FormsControl/FormsControls";


const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogsData.map( d => <DialogItems name={d.name} key={d.id} id={d.id} img={d.img}/> );
    let messageElements = props.dialogsPage.messages.map( m => <MessageItems message={m.message} key={m.id}/> );

    let onAddNewMessage = (values) => {
        props.addMessage(values.messagesField);
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogElements}
            </div>
            <div className={css.messages}>
                {messageElements}
                < AddMessagesReduxForm onSubmit={onAddNewMessage} />
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className={css.inputWrap}>
                <Field
                    component={FormControl('textarea')}
                    name={"messagesField"}
                    placeholder={"Введите сообщение"}
                />
                <button>Send</button>
            </div>
        </form>
    )
};

const AddMessagesReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)

export default Dialogs