import React, { Component } from 'react';
import { Grid } from 'material-ui';

import ProductCategoryTable from './ProductCategoryTable';
import ProductCategoryAddForm from './ProductCategoryAddForm';

class ProductCategory extends Component {
  render() {
    return (
      <Grid container>
        {/* Product Category Table */}
        <ProductCategoryTable />
        <ProductCategoryAddForm />
      </Grid>
    );
  }
}

export default ProductCategory;
