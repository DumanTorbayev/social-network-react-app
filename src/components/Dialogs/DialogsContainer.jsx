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

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer