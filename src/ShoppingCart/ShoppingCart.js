import React, { Component, useState, useEffect } from 'react';
import { useGetProductsContext } from '../ShoppingCartContext';
import { Grid } from '@material-ui/core';
import OpenCart from './OpenCart';
import CloseCart from './CloseCart';

const ShoppingCart = ({open, setOpenCart}) => {
  let products = useGetProductsContext();
  console.log('products :', products);
  console.log('products :', products);
  let productCount = Object.values(products).reduce((a, c) => a+c.count, 0);
  return (
    <Grid>
      <OpenCart
        setState={setOpenCart} 
        state={open}
        products={products}
        productCount={productCount}/> : 
      <CloseCart 
        setState={setOpenCart} 
        productCount={productCount}/>
    </Grid>
  ) 
}
 
export default React.memo(ShoppingCart);