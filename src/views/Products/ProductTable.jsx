import React, { Component } from 'react';
import { Grid } from 'material-ui';
import { Edit, Delete } from '@material-ui/icons';

import { RegularCard, Table, ItemGrid, IconButton } from '../../components';

class ProductTable extends Component {
  render() {
    const EditButton = (
      <IconButton color="primary">
        <Edit style={{ color: '#FFFFFF' }} />
      </IconButton>
    );
    const DeleteButton = (
      <IconButton color="primary">
        <Delete style={{ color: '#FFFFFF' }} />
      </IconButton>
    );
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="List Of All Products"
            cardSubtitle="List of all Products that currently have"
            content={
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  'Id',
                  'code',
                  'Title',
                  'Image',
                  'Category',
                  'Price',
                  'Edit',
                  'Delete'
                ]}
                tableData={[
                  [
                    '1',
                    '#23323',
                    'Dakota Rice',
                    'Niger',
                    'Watch',
                    '100',
                    EditButton,
                    DeleteButton
                  ],
                  [
                    '2',
                    '#23323',
                    'Minerva Hooper',
                    'Curaçao',
                    'Phone',
                    '2000',
                    EditButton,
                    DeleteButton
                  ]
                ]}
              />
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default ProductTable;
