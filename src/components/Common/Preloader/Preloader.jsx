import React from 'react';
import css from './Preloader.module.scss';

const Preloader = () => {
    return (
        <>
            <div className={css.loader}>Loading</div>
        </>
    )
};

export default Preloader;