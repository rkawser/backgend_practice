import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddUser.css'
const AddUser = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products',data)
        .then(res=>{
           if (res.data.insertedId) {
               alert('post your data successfully')
           }
        })

     }
    return (
        <div>
            <h2>This is Add products</h2>

            <div >
            <form className='user-form' onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder='name'/>
        <input type='number' {...register("price", )} placeholder='price'/>
        <textarea {...register("description")} placeholder='description'/>
        <input {...register("img")} placeholder='image'/>
        <input type="submit" />
       </form>
            </div>
        </div>
        
    );
};

export default AddUser;