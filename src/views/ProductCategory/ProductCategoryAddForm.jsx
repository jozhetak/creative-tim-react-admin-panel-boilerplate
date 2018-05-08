import React, { Component } from 'react';
import { Grid } from 'material-ui';
import { FileUpload } from '@material-ui/icons';
import { connect } from 'react-redux';
// import request from 'superagent';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import { withStyles } from 'material-ui/styles';

// import secret from '../../secret/secret';
import { startAddAdminCategory } from '../../redux/actions/adminProductCategoryAction/adminProductCategoryAction';
import { Button, RegularCard, ItemGrid, CustomInput } from '../../components';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class ProductCategory extends Component {
  state = {
    selectedCategoryImage: null,
    categoryName: null,
    isWorking: false
  };
  formReset = () => {
    this.setState({ selectedCategoryImage: null });
    this.setState({ categoryName: null });
    this.setState({ isWorking: false });
  };
  handleImageUploadAndSaveToFirebase(name, file) {
    console.log('Going to upload', file);
    /* Previous Code (Testing)*/
    // let upload = request
    //   .post(secret.cloudinaryConfig.CLOUDINARY_UPLOAD_URL)
    //   .field('upload_preset', secret.cloudinaryConfig.CLOUDINARY_UPLOAD_PRESET)
    //   .field('file', file);
    // upload.end((err, response) => {
    //   if (err) {
    //     console.error(err);
    //   }
    //   if (response.body.secure_url !== '') {
    //     // Save to Firebase after image Upload
    //     this.props.startAddAdminCategory({
    //       categoryName: name,
    //       categoryImageUrl: response.body.secure_url
    //     });
    //     this.formReset();
    //   }
    // });
    /* End */
  }
  handleCategoryAdd = event => {
    let categoryName = this.state.categoryName;
    let categoryImage = this.state.selectedCategoryImage;
    if (categoryName && categoryImage) {
      this.setState({ isWorking: true });
      this.handleImageUploadAndSaveToFirebase(categoryName, categoryImage);
    } else {
      console.log('[Error] Give a valid Category Name or Select Image file!');
    }
  };
  handleCategoryName = event => {
    this.setState({ categoryName: event.target.value });
  };
  handleCategoryImageChange = event => {
    console.log('Got File change Event:', event.target.files);
    this.setState({ selectedCategoryImage: event.target.files[0] });
  };
  render() {
    const { classes } = this.props;
    return (
      <ItemGrid xs={12} sm={12} md={4}>
        <RegularCard
          cardTitle="Add Category"
          cardSubtitle="Place the product category name to add"
          content={
            this.state.isWorking ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CircularProgress
                  className={classes.progress}
                  style={{ color: purple[500] }}
                  size={90}
                  thickness={7}
                />
              </div>
            ) : (
              <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: 'Regular',
                      onChange: this.handleCategoryName
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                  <input
                    style={{ display: 'none' }}
                    accept="image/*"
                    id="raised-button-file"
                    type="file"
                    onChange={this.handleCategoryImageChange}
                  />
                  <label htmlFor="raised-button-file">
                    <Button round variant="raised" component="span">
                      <FileUpload style={{ color: '#FFFFFF' }} /> Upload
                    </Button>
                    {this.state.selectedCategoryImage ? (
                      <p
                        style={{
                          display: 'inline-block',
                          marginLeft: '10px',
                          color: 'green'
                        }}
                      >
                        {this.state.selectedCategoryImage.name}
                      </p>
                    ) : (
                      <p
                        style={{ display: 'inline-block', marginLeft: '10px' }}
                      >
                        Category Image not Selected
                      </p>
                    )}
                  </label>
                </ItemGrid>
                <ItemGrid
                  xs={12}
                  sm={12}
                  md={12}
                  style={{ textAlign: 'center' }}
                >
                  <Button onClick={this.handleCategoryAdd} color="primary">
                    Save
                  </Button>
                </ItemGrid>
              </Grid>
            )
          }
        />
      </ItemGrid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startAddAdminCategory: info => {
      dispatch(startAddAdminCategory(info));
    }
  };
};

export default connect(null, mapDispatchToProps)(
  withStyles(styles)(ProductCategory)
);
