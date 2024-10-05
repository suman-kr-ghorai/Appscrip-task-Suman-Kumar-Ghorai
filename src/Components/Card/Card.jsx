// src/Card.jsx

import React from 'react';
import love from "../../assets/image/love.svg"; //img
import { useState } from 'react';

// import './Card.css'; // You can create this file for custom styles.

const Card = ({ product }) => {
    const [isLoved, setIsLoved] = useState(false);

    const toggleLove = () => {
        setIsLoved(!isLoved);
    };
    return (
        <div className="card">
            <img src={product.image} alt={product.title} className="card-img" />
            <div className="card-content">
                <div className="card-title">{product.title}</div>
                <div className='desc-heart'>
                <p className="card-description"><u>Sign-in </u> or Create an account to see pricing</p>
                <div className="card-actions">
                    <span className={`heart-icon ${isLoved ? 'loved' : ''}`}onClick={toggleLove}>
                        ♥ 
                    </span>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
