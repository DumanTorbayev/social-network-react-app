import React from 'react';
import Dialogs from "./Dialogs";
//import Action Creators
import {addMessage, updateNewMessageText} from "../../redux/reducers/dialogsReducer";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addNewMessage = () => {
        props.store.dispatch(addMessage())
    };

    let messageWrite = (enterText) => {
        props.store.dispatch(updateNewMessageText(enterText))
    };

    return (
        <Dialogs
            state={state.dialogsPage}
            addNewMessage={addNewMessage}
            messageWrite={messageWrite}
        />
    )
};

export default DialogsContainer