import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
let {friendID} = useParams();
const [frientde,setfriende] = useState({});
useEffect(() => {   
 fetch(`https://jsonplaceholder.typicode.com/users/${friendID}`)
 .then(res => res.json())
 .then(data => 
    setfriende(data)
    //console.log(data);})
 )

 },[])

    return (
        <div>
            <h5>{frientde.name}</h5>
            <p>{frientde.email}</p>
            <p>{frientde.phone}</p>
            <p>{frientde.website}</p> 
            
          
            
        </div>
    );
};

export default About;