import React from 'react';

import css from './NotFound.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.notFound}>
            <img src="https://i.stack.imgur.com/6M513.png" alt="Not_Found_Page"/>
        </div>
    );
};

export {NotFoundPage};