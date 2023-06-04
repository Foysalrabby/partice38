import React from 'react';
import './Friend.css';
import { Link, useParams } from 'react-router-dom';

const Friendbio = (props) => {
     const {name,email,id}=props.frdkey;
    console.log(props.frdkey);
    let {friendID} = useParams();
    return (
        <div className="stylekdf" >
        <h5>Name :{name}</h5>
        <p>Email : {email}</p>
        <Link to={`/about/${id}`}><p>show deatils : {id}</p> </Link>
         
            
        </div>
    );
};

export default Friendbio;