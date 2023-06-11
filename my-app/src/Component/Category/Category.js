import React, { useContext, useEffect, useState } from 'react';
import Catgorydeta from '../CategoryDetais.js/Catgorydeta';
import { categorycontext } from '../../App';

const allProduct=[{name:'asus',category:'laptop'},{name:'dell',category:'laptop'},{name:'hp',category:'laptop'},
{name:'Samsung',category:'mobile'},{name:'redmi',category:'mobile'},{name:'Nokia',category:'mobile'},
{name:'cNNON',category:'camera'},{name:'Sony',category:'camera'},{name:'nikki',category:'camera'}
] ;

const Category = () => {
    const [category]=useContext(categorycontext);
    const [product,setproduct]=useState([]);
    useEffect(()=>{
      const matproduct=allProduct.filter(pd => pd.category ===category.toLowerCase());
       setproduct(matproduct);
    },[category])

    return (
        <div>
            <h3>Select  is category {category}</h3>
            {
                product.map(pd => <Catgorydeta product={pd} ></Catgorydeta>)
            }
            
        </div>
    );
};

export default Category;