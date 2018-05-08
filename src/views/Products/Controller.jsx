import React, { Component } from 'react';
import { Grid, Card } from 'material-ui';

import { Button, ItemGrid, CustomInput } from '../../components';

import SearchCategory from './controller/SearchCategory';

const style = {
  controlBar: {
    backgroundColor: '#fff',
    boxShadow: '0px 3px 2',
    borderBottom: '0',
    marginBottom: '10px',
    width: '100%',
    color: '#555555',
    border: '0',
    borderRadius: '3px',
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
    minHeight: '50px',
    display: 'block'
  },
  controlBarHeading: {
    color: '#A03AB5',
    textShadow: '0.5rem 1rem 2rem rgba(0, 0, 0, 0.2)',
    fontWeight: 500,
    margin: 0,
    padding: '0px 0px',
    textTransform: 'uppercase'
  },
  searchBox: {},
  centerItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightAlign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
class Controller extends Component {
  render() {
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <Card style={style.controlBar}>
            <Grid container>
              <ItemGrid xs={12} sm={12} md={4} style={style.leftItem}>
                <h3 style={style.controlBarHeading}>Product Management</h3>
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={5} style={style.centerItem}>
                <CustomInput
                  style={style.searchBox}
                  labelText="Search..."
                  id="search-product"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <SearchCategory />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={3} style={style.rightAlign}>
                <Button round color="primary">
                  ADD A NEW PRODUCT
                </Button>
              </ItemGrid>
            </Grid>
          </Card>
        </ItemGrid>
      </Grid>
    );
  }
}

export default Controller;
