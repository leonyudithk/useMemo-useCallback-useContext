import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Padre } from '../components/ejercicioInd/Padre';
import CallBackHook from '../components/memorizacion/CallbackHook';
import Memorize from '../components/memorizacion/Memorize';
import MemorizeHooks from '../components/memorizacion/MemorizeHooks';
import NavBar from '../components/proyecto/NavBar';


const AppRouters = () => {
    return (
       <BrowserRouter>
       <NavBar/>
           <Routes>
            <Route path="/memorize" element={<Memorize/>}/>
            <Route path="/memorizeHook" element={<MemorizeHooks/>}/>
            <Route path="/callback" element={<CallBackHook/>}/>
            <Route path="/padre" element={<Padre/>}/>
            
            <Route path="*" element={<Navigate to="/"/>}/>
           </Routes>
       </BrowserRouter>
    );
};

export default AppRouters;