import React from 'react';

import css from './HomePage.module.css';

const HomePage = () => {

    return (
        <div className={css.homePage}>
            <img
                src="https://thumbs.dreamstime.com/b/hacker-mask-portrait-binary-code-50382038.jpg"
                alt="hacker-anonymous"/>
        </div>
    );
};

export {HomePage};