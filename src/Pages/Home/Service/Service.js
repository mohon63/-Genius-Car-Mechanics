import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    // const { service } = props;
    const { name, price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="px-1">
                <h3>{name}</h3>
                <h5>Price: {price}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;