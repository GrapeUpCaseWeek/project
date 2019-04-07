import React from 'react';
import Price from '../price/Price';

import './productDetails.css';

class ProductDetails extends React.Component {
    state = { amount: 1 };

    changeAmount = (amount) => {
        this.setState({ amount: amount.target.value });
    }

    render() {
        const { name, img, price, desc } = this.props.item;
        const { closeView } = this.props;

        return (
            <div className="product-details">
                <div className="product-details__image-wrapper">
                    <img className="product-details__image" src={img} />
                </div>
                <div className="product-details__actions-wrapper">
                    <h1>{name}</h1>
                    <Price amount={this.state.amount} price={price}/>
                    <input
                        type="number"
                        min="1"
                        defaultValue={this.state.amount}
                        onChange={this.changeAmount}
                    />
                    <button onClick={() => alert(`You bought ${this.state.amount} ${name}`)}>BUY</button>
                    <button className="product-details__close-button" onClick={closeView}>X</button>
                </div>
                <article className="product-details__description">{desc}</article>
            </div>
        );
    }
}

export default ProductDetails;