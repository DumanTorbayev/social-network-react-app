import React from 'react';
import Dialogs from "./Dialogs";
//import Action Creators
import {addMessage, updateNewMessageText} from "../../redux/reducers/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessage())
        },
        messageWrite: (enterText) => {
            dispatch(updateNewMessageText(enterText))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer