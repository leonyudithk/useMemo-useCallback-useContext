import React, { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { procesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter';
import Small from './Small';

const MemorizeHooks = () => {
    const {counter, handleSumar, handleRestar} =  useCounter()
    console.log(counter)

   const [show, setShow]= useState(true)
   const memorizandoUse = useMemo(()=> procesoPesado(500), [])
    return (
        <div>
            <h1>Contador: <Small value={counter}/></h1>
            <p>{memorizandoUse}</p>
            <Button onClick={handleSumar}>+1</Button>
            <Button onClick={handleRestar}>-1</Button>
            <Button onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</Button>
        </div>
    );
};

export default MemorizeHooks;