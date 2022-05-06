import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../../components";

const CarPage:FC = () => {
    return (
        <div>
            <CarForm/>
                <hr/>
            <Cars/>
            <Outlet/>
        </div>
    );
};

export {CarPage};