import React, { useContext } from 'react';
import Catgorydeta from '../CategoryDetais.js/Catgorydeta';
import { categorycontext } from '../../App';

const Category = () => {
    const category=useContext(categorycontext);
    return (
        <div>
            <h3>Select  is category {category}</h3>
            <Catgorydeta ></Catgorydeta>
        </div>
    );
};

export default Category;