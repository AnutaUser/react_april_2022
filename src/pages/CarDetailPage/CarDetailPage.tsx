import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {ICar} from "../../interfaaces";
import {carService} from "../../services";
import {CarDetail} from "../../components";

const CarDetailPage:FC = () => {

    const {id} = useParams<{id: string}>();

    const [car, setCar] = useState<ICar|null>(null);

    useEffect( () => {
        carService.getById(id as string).then(({data}) => setCar(data))
    }, [id]);

    return (
        <div>
            {
                car && <CarDetail key={car.id} car={car}/>
            }
        </div>
    );
}

export {CarDetailPage};