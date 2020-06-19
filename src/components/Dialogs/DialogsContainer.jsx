import React from 'react';
import Dialogs from "./Dialogs";
import {addMessage, updateNewMessageText} from "../../redux/reducers/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class DialogsContainer extends React.Component {
    render() {
        return (
            <Dialogs {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let AuthRedirectComponent =  withAuthRedirect(DialogsContainer)

export default connect(mapStateToProps, {addMessage, updateNewMessageText})(AuthRedirectComponent);
