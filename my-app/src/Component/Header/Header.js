import React, { useContext } from 'react';
import { categorycontext } from '../../App';

const Header = () => {
    const [category,setcategoory]=useContext(categorycontext);

    return (
        <div>
          
            <h1> this is header : {category}</h1>
            <button onClick={()=> setcategoory('laptop')}>Laptop</button>
            <button onClick={()=> setcategoory('mobile')}>Mobile</button>
            <button onClick={()=> setcategoory('camera')}>Camera</button>
        </div>
    );
};

export default Header;