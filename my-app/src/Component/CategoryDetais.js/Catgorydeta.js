import React, { useContext } from 'react';
import { categorycontext } from '../../App';



const Catgorydeta = (props) => {
   
    const {name} = props.product;
    return (
        <div>
           
            <p>selected product : {name} </p>
        </div>
    );
};

export default Catgorydeta;