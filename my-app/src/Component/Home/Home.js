import React, { useEffect, useState } from 'react';
import Friendbio from '../Friend/Friendbio';




const Home = () => {
 const[friends,setfriends] =useState([""]);
   useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data =>setfriends(data));
   },[])
    return (
        <div>
        {
            friends.map(friends => <Friendbio key = {friends.id} friends={friends} ></Friendbio>)
           
        }
     
        </div>
    );
};

export default Home;