import React, { useState } from 'react';
import { UserContext } from '../components/proyecto/context/UserContext';
import AppRouters from './AppRouters';

const Main = () => {

    const [user, setUser] = useState({
        nombre: 'Yudith',
        apellido: 'Leon'
    })


    return (
        <div>
        <UserContext.Provider value={{user, setUser}}>
                <AppRouters/>
        </UserContext.Provider>
           
        </div>
    );
};

export default Main;