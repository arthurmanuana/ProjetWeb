
import React, { useState } from 'react';

const essai = () => {


    const [change, setChange ] = useState(0)
    

    return (
        <div>

            <p>Votre valuer est de : {change}</p>
            <button onClick={() => setChange(change+1)}></button>

            
            useEffect()



        </div>
    );
};

export default essai;

