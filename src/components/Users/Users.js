import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import UserCard from '../UsersCard/UserCard';

const Users = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h2>This is products</h2>
          <Container>
          <Row xs={1} md={2} className="g-4">
                {
                    products.map(product=><UserCard key={product._id} product={product}></UserCard>)
                }
         </Row>
          </Container>
        </div>
    );
};

export default Users;