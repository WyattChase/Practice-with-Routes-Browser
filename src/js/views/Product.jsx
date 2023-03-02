import React from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => { 
    let { id } = useParams();

    return (
        <div>
            <h1>Product {id}</h1>
            <Link to="/home">Go Home</Link>
        </div>
    )
}

export default Product;