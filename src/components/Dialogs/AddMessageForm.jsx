import React from 'react';
import css from "./Dialogs.module.scss";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../Common/FormsControl/FormsControls";


const AddMessageForm = ({handleSubmit}) => {
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className={css.inputWrap}>
                    <Field
                        component={FormControl('textarea')}
                        name={"messagesField"}
                        placeholder={"Введите сообщение"}
                    />
                    <button>Send</button>
                </div>
            </form>
        </>
    );
};

const AddMessagesReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)
export default AddMessagesReduxForm;