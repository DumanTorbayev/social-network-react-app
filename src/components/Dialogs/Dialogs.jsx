import React from 'react';
import css from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Alik'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Nargiz'},
        {id: 4, name: 'Aisulu'},
    ];

    let messages = [
        {id: 1, message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {id: 3, message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: 4, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    ];

    let dialogElements = dialogsData.map( d => <DialogItems name={d.name} id={d.id}/> );

    let messageElements = messages.map( m => <MessageItems message={m.message}/> );

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