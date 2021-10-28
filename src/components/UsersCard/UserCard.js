import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserCard = ({product}) => {
    const{name,img,price,details,_id}=product;

    const handledelete=(id)=>{
        const prop = window.confirm('are you sure, delete this product')
        if(prop){
            const url =`http://localhost:5000/products/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
              alert('deleted successfully')
            }         
        })
        }
    }
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{price}</Card.Title>

            <Card.Text>
             {details}        
            </Card.Text>
          </Card.Body>
          <button onClick={()=>handledelete(_id)} className='btn btn-danger m-2'>delete</button>
          <Link to={`/users/update/${_id}`}>
          <button  className='btn btn-primary m-2'>Update</button>
          </Link>         
        </Card>
      </Col>
    );
};

export default UserCard;