import React from 'react';
import css from './Dialogs.module.scss'
import DialogItems from "./DialogItems";
import MessageItems from "./MessageItems";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../redux/actions/dialogs";
import {getDialogsData, getMessages} from "../../redux/selectors/dialogs";
import AddMessagesReduxForm from "./AddMessageForm";


const Dialogs = () => {
    const dispatch = useDispatch();
    const dialogsData = useSelector((state) => getDialogsData(state));
    const messages = useSelector((state) => getMessages(state));

    let onAddNewMessage = (values) => {
        dispatch(addMessage(values.messagesField))
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsData.map( d => <DialogItems {...d} key={d.id}/> )}
            </div>
            <div className={css.messages}>
                {messages.map( m => <MessageItems message={m.message} key={m.id}/> )}
                <AddMessagesReduxForm onSubmit={onAddNewMessage} />
            </div>
        </div>
    )
};

export default Dialogs