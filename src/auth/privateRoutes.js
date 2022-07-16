import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate} from 'react-router-dom';

const PrivateRoutes = () => {
    const token = useSelector(state => state.userD.token?.token);
 const useAuth = async () => {
     if(token){
        return await true
         }
        return await false
 }

 const isAuth = useAuth();

    return (
        isAuth? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes;