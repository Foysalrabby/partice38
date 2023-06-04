import React, { useEffect, useState } from 'react';
import Friendbio from '../Friend/Friendbio';




const Home = () => {
 const[friends,setfriends] =useState([]);
   useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data =>setfriends(data));
   },[])
    return (
        <div>
        {
            friends.map(frdkey => <Friendbio key={frdkey.key} frdkey={frdkey} ></Friendbio>)
        }
         
        </div>
    );
};

export default Home;