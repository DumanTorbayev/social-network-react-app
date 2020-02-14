import React from 'react';
import css from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map( d => <DialogItems name={d.name} id={d.id} img={d.img}/> );

    let messageElements = props.state.messages.map( m => <MessageItems message={m.message}/> );

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogElements}
            </div>
            <div className={css.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs