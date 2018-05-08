import React, { Component } from 'react';

import Controller from './Controller.jsx';
import ProductTable from './ProductTable';

class Products extends Component {
  state = {
    selectedCategoryImage: null
  };

  handleInputChange = event => {
    console.log('Got File change Event:', event.target.files);
    this.setState({ selectedCategoryImage: event.target.files[0] });
  };
  render() {
    return (
      <div>
        <Controller />
        <ProductTable />
      </div>
    );
  }
}

export default Products;
