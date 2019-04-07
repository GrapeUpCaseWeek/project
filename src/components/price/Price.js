import React from 'react';

const Price = ({ amount, price }) => {
    const value = ((price * 100) * amount) / 100;
    return (
        <div>Price: {value}</div>
    );
};

export default Price;