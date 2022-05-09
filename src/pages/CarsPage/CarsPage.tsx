import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../../components";

const CarsPage:FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <div>
                <Cars/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarsPage};