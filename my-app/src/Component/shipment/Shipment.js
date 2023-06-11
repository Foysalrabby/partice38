import React, { useContext } from 'react';
import { categorycontext } from '../../App';

const Shipment = () => {
    const [category,setcategory]=useContext(categorycontext);
    return (
        <div>
            <h2> the Shipment value{category} </h2>
            <button onClick={()=> setcategory(category+1)}> increment</button>
        </div>
    );
};

export default Shipment;