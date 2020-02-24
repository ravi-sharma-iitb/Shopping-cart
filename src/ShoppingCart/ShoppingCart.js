import React, { Component, useState } from 'react';
import { useGetProductsContext } from '../ShoppingCartContext';
import { Grid } from '@material-ui/core';
import OpenCart from './OpenCart';
import CloseCart from './CloseCart';

const ShoppingCart = () => {
  const [state, setState] = React.useState(false);
  let products = useGetProductsContext();
  console.log('products :', products);
  let productCount = Object.values(products).reduce((a, c) => a+c.count, 0);
  console.log('productCount :', productCount);
  return (
    <Grid>
      {state ? <OpenCart 
                setState={setState} 
                state={state} 
                productCount={productCount}/> : 
              <CloseCart 
                setState={setState} 
                productCount={productCount}/>}
    </Grid>
  ) 
}
 
export default React.memo(ShoppingCart);