import React, { useContext } from 'react';
import { categorycontext } from '../../App';

const Header = () => {
    const [category,setcategoory]=useContext(categorycontext);

    return (
        <div>
           <p> the count: {category} </p>
            <h1> this is header : {category}</h1>
            <button onClick={()=> setcategoory(category+1)}>Increment</button>
        </div>
    );
};

export default Header;