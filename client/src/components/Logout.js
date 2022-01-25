import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = () => {      
    const { push } = useHistory();

    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                localStorage.removeItem('token');
                push('/login');
            });
    }, []);  //eslint-disable-line
    return(<div></div>);
}

export default Logout;