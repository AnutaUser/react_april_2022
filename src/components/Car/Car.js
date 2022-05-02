import React from 'react';

import {Link} from 'react-router-dom';

const Car = ({car}) => {

    const {id,model, price} = car;

    return (
        <div>
            {id} -- {model} -- {price}
            <Link to={`${id}`} state={car}><button>car details</button></Link>

        </div>
    );
};

export {Car};