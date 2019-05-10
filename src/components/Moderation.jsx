import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Icon } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { fetchModerationProducts, moderateDeleteProduct, moderateUpdateProduct, setButtonsLoading, logoutUser } from '../actions';
import { ProductModerationCard } from '../common';


class Moderation extends React.Component {
  constructor(){
    super();
    this.state = {
      loaded: false,
    };
  }
  callUpdateProduct(productId, params){
    this.props.moderateUpdateProduct(productId, params)
  }
  componentWillMount(){
    if(!this.state.loaded && (!this.products || !this.products.length)){
      this.props.fetchModerationProducts();
      this.setState({ loaded: false });
    }
  }
  render() {
    const { handleSubmit, products, ingredient_creation_data, packaging_creation_data, moderateDeleteProduct, buttonsLoading, setButtonsLoading, logoutUser } = this.props;
    const ingredientCreationData = ingredient_creation_data.map(({ key, label }) => {
      return { value: key, label}
    })
    const packagingCreationData = packaging_creation_data.map(({ key, label }) => {
      return { value: key, label}
    })
    return (
      <div className="container">
        <h1>Moderation</h1>
        <Icon
          onClick={() => logoutUser()}
          style={{ position: "absolute", top: 20, right: 20, color: "#F14D5A", cursor: "pointer" }}>
          power_settings_new
        </Icon>
        <Grid container spacing={40}>
          {products.map((product) => {
            return(
              <ProductModerationCard
                deleteProduct={() => {
                  setButtonsLoading(true);
                  moderateDeleteProduct(product.id);
                }}
                updateProduct={(params) => {
                  setButtonsLoading(true);
                  this.callUpdateProduct(product.id, params);
                }}
                product={product}
                ingredientCreationData={ingredientCreationData}
                packagingCreationData={packagingCreationData}
                key={product.id}/>
            )
          })}
        </Grid>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchModerationProducts, moderateDeleteProduct, moderateUpdateProduct, setButtonsLoading, logoutUser }, dispatch);
}

function mapStateToProps(state) {
  return {
    ingredient_creation_data: state.moderation.ingredient_creation_data,
    packaging_creation_data: state.moderation.packaging_creation_data,
    products: state.moderation.products,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Moderation);
