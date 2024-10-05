// src/ProductList.jsx

import React, { useEffect, useState } from 'react';
import Card from  "../Card/Card";
//import './ProductList.css'; // You can create this file for custom styles.

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            
            
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
