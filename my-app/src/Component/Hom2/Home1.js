import React from 'react';
import Category from '../Category/Category';

const Home1 = (props) => {
    const {count}=props;

    
    return (
        <div>
            <h2>this is home{count} </h2>
            <Category count={count}></Category>
        </div>
    );
};

export default Home1;