import React, { memo } from 'react';
import { Button } from 'react-bootstrap';

const ShowIncrement = memo(({increment})=> {
    console.log('Me volvi a rendizar desde showIncrement')

    return (
        <div>
            <Button onClick={()=>increment(5)}>Incrementar</Button>
        </div>
    );
});



export default ShowIncrement;