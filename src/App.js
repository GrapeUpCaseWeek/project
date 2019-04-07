import React, { Component } from 'react';
import ProductsList from './components/productList/ProductsList';
import './App.css';
import ProductDetails from './components/productDetails/ProductDetails';
import findSelectedProduct from './utils/findSelectedProduct';

import { fruitsAndVegetables } from './mocks/mock';

class App extends Component {
  state = ({ selectedItem: null });

  selectItem = id => {
    const selectedItem = findSelectedProduct(fruitsAndVegetables, id);
    this.setState({ selectedItem });
  }

  deselectItem = () => {
    this.setState({ selectedItem: null })
  }

  render() {
    const { selectedItem } = this.state;
    return (
     <div>
       {selectedItem ? 
       <ProductDetails item={selectedItem} closeView={this.deselectItem}/> :
       <ProductsList products={fruitsAndVegetables} selectItem={this.selectItem} />
      }
     </div>
    );
  }
}

export default App;
