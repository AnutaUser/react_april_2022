import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {CarDetail} from '../../components';
import {carsService} from '../../services';

const SingleCarPage = () => {

    const [car, setCar] = useState(null);
    const {state} = useLocation();
    const {carId} = useParams();

    useEffect(() => {
        if (state) {
            setCar(state);
        } else {
            carsService.getById(carId).then(value => setCar(value.data))
        }
    }, []);

    return (
        <div>
            {
                car && <CarDetail car={car}/>
            }
        </div>
    );
};

export {SingleCarPage};