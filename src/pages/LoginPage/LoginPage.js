import React, {useRef} from 'react';
import {useAuth} from '../../hooks';
import {useLocation, useNavigate} from 'react-router-dom';

const LoginPage = () => {

    const {logIn} = useAuth();
    const {state} = useLocation();
    const name = useRef();
    const navigate = useNavigate();

    const login = () =>{
        const userName = name.current.value
        logIn(userName, ()=>{});
    }

    return (
        <div>
            <input type="text" ref={name} placeholder={'name'}/>
            <button onClick={()=>login(navigate.pathname, {replace: true})}>Save</button>
        </div>
    );
};

export {LoginPage};