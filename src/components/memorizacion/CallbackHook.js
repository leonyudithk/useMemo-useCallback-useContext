import React, { useCallback, useEffect, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {

    const [counter, setCounter] =useState(10)
    console.log(counter)

   const incremento = useCallback((num) =>{
            setCounter(c => c + num)
   }, [setCounter])



     //   const incremento = (num)=>{
      //      setCounter(counter+num)
     //   }

    return (
        <div>
            <h1>UseCallback: {counter} </h1>
          
            <ShowIncrement increment={incremento} />
        </div>
    );
};

export default CallBackHook;