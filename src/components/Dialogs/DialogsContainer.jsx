import React from 'react';
import Dialogs from "./Dialogs";
import {addMessage, updateNewMessageText} from "../../redux/reducers/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    render() {
        return (
            <Dialogs {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

export default compose(
    connect(mapStateToProps, {addMessage, updateNewMessageText}),
    withAuthRedirect
)(DialogsContainer)
