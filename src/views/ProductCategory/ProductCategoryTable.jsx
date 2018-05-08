import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { Edit, Delete } from '@material-ui/icons';
import Modal from 'material-ui/Modal';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

import { RegularCard, Table, ItemGrid, IconButton } from '../../components';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
class ProductCategoryTable extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderTableRow = () => {
    const EditButton = (
      <IconButton onClick={this.handleOpen} color="primary">
        <Edit style={{ color: '#FFFFFF' }} />
      </IconButton>
    );
    const DeleteButton = (
      <IconButton color="primary">
        <Delete style={{ color: '#FFFFFF' }} />
      </IconButton>
    );
    const adminProductCategory = this.props.adminProductCategory;
    return adminProductCategory.map((category, index) => {
      return [
        index + 1,
        category.categoryName,
        <img
          alt="Category Thumbnail"
          src={category.categoryImageUrl}
          style={{ height: 50, width: 50 }}
        />,
        EditButton,
        DeleteButton
      ];
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <ItemGrid xs={12} sm={12} md={8}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          disableBackdropClick={true}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal>
        <RegularCard
          cardTitle="All Category List"
          cardSubtitle="List of all Category that currently have"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={['Id', 'Category Name', 'Image', 'Edit', 'Delete']}
              tableData={this.renderTableRow()}
            />
          }
        />
      </ItemGrid>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminProductCategory: state.adminProductCategory
  };
};

export default connect(mapStateToProps, null)(
  withStyles(styles)(ProductCategoryTable)
);
