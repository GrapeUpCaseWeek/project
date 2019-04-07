import React, { Component } from 'react';
import ProductListItem from '../productListItem/ProductListItem';

import './productList.css';

class ProductsList extends Component {
    getProduct = product =>  (
        <ProductListItem key={product.id} {...product} selectItem={this.props.selectItem} />
    );

    render () {
        const productItems = this.props.products.map(product => this.getProduct(product));
        return (
            <ul className="product-list">
                { productItems }
            </ul>
        );
    }
}

export default ProductsList;
