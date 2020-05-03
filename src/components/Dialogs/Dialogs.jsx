import React from 'react';
import css from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map( d => <DialogItems name={d.name} id={d.id} img={d.img}/> );

    let messageElements = props.state.messages.map( m => <MessageItems message={m.message}/> );

    console.log(props)

    let newMessage = React.createRef();

    let addNewMessage = () => {
        props.addMessage();
    };

    let messageWrite = () => {
        let messageText = newMessage.current.value;
        props.updateNewMessageText(messageText);
        console.log(messageText)
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogElements}
            </div>
            <div className={css.messages}>
                {messageElements}
                <div className={css.inputWrap}>
                    <input onChange={messageWrite} type="text" ref={newMessage} />
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs