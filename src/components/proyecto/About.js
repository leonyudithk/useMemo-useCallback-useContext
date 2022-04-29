import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from './context/UserContext';

const About = () => {

    const {user, setUser}= useContext(UserContext)
    console.log(user)
    
    return (
        <div>
            Estoy en About
            { 
                JSON.stringify(user)
            }
            <Button onClick={()=>
            setUser({
                nombre:'Frontend-10',
                apellido:'Bootcamp'
            })}>Cambiar Estado</Button>
               { 
                JSON.stringify(user)
            }
        </div>
    );
};

export default About;