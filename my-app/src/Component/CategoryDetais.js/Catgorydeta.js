import React, { useContext } from 'react';
import { categorycontext } from '../../App';



const Catgorydeta = () => {
   
    const category = useContext(categorycontext);
    return (
        <div>
            <h3>this is Category detailspage {category}</h3>
            <p>selected : {category} </p>
        </div>
    );
};

export default Catgorydeta;