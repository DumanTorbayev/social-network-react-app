import React from 'react';
import css from './FormControls.module.scss'

export const FormControl = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${css.form_control} ${hasError ? css.error : ''}`}>
            <Element {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
