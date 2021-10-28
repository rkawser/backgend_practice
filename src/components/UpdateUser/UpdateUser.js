import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const[user,setUser]=useState({})
    const {id}=useParams(); 
    console.log(id);
    useEffect(()=>{
        const url =`http://localhost:5000/products/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
            <h2>This is Update products{id}</h2>
            <h2>name:{user.name}</h2>
        </div>
    );
};

export default UpdateUser;