import React from 'react';

import css from './Button.module.css';

const Button = ({children}) => {
    return (
        <Button className={css.button}>
            {children}
        </Button>
    );
};

export {Button};