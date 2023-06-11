import React from 'react';
import Category from '../Category/Category';

const Home1 = (props) => {
    const {count}=props;

    
    return (
        <div>
           
            <Category count={count}></Category>
        </div>
    );
};

export default Home1;