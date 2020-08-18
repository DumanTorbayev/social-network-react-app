import React from 'react';
import css from "./MyPosts.module.scss";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../Common/FormsControl/FormsControls";

const AddPostForm = ({handleSubmit}) => {
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className={css.new_posts}>
                    <Field
                        component={FormControl('textarea')}
                        name={"myPost"}
                        placeholder={"Post message"}
                    />
                    <button>Send</button>
                </div>
            </form>
        </>
    );
};

const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm)
export default AddPostReduxForm;