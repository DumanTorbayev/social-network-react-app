import React from 'react';
import css from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
//import Action Creators
import {addMessage, updateNewMessageText} from "../../redux/reducers/dialogsReducer";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map( d => <DialogItems name={d.name} id={d.id} img={d.img}/> );
    let messageElements = props.state.messages.map( m => <MessageItems message={m.message}/> );
    let newMessageText = props.state.newMessageText;

    //let newMessage = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addMessage())
    };

    let messageWrite = (event) => {
        let enterText = event.target.value;
        props.dispatch(updateNewMessageText(enterText))
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogElements}
            </div>
            <div className={css.messages}>
                {messageElements}
                <div className={css.inputWrap}>
                    <textarea onChange={messageWrite} value={newMessageText} placeholder="Введите сообщение"/>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs