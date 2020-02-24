import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import '../ShoppingCart.css';
import { useSelectedProductContext, useGetProductsContext }  from '../../ShoppingCartContext';  

const modifyItemQuantity = (products, product, incrementProduct) => {
  console.log('here');
  if(incrementProduct){
    products[product.id].count++;
  }else{
    products[product.id].count !=1 ? products[product.id].count-- : console.log("hello");
  }
  console.log(products);
  return {...products};
}

const ItemQuantityModifier = ({setDeleteButtonHoverClass, product}) => {
  const [classes, setClasses] = useState(["delete-button"]);
  const [isDisabled, setIsDisabled] = useState(product.count <= 1 ? true : false);
  console.log('isDisabled :', isDisabled);
  console.log('product.count :', product.count);
  useEffect(() => {
    product.count <= 1 ? setIsDisabled(true) : setIsDisabled(false);
  }, [product.count])
  let selectProduct = useSelectedProductContext();
  return (
    <Grid container spacing={1} style={{position: 'relative'}}>
      <Grid 
        item
        style={{position: 'absolute', right: '5px'}}
        className={classes.join(" ")}
        onMouseOver={() => {
          setClasses((classes) => [...classes, "delete-button-hover"]);
          setDeleteButtonHoverClass((classes) => [...classes, "delete-button-hover-text-decor"])
        }}
        onMouseOut={() => {
          setClasses((classes) => [...classes.slice(0, 1)])
          setDeleteButtonHoverClass(() => [])
        }}
        onClick={() => selectProduct((products) => {
          delete products[product.id];
          return {...products};
        })}>
      </Grid>
      <Grid item xs={12}  style={{marginTop: '20px', marginBottom: '10px'}} className="product-price">
        $ {product.price}
      </Grid>
      <Grid item xs={12}>
        <button 
          className="quantity-button" 
          onClick={() => {
            selectProduct((products) => modifyItemQuantity(products, product, true))
          }}>+</button>
        <button 
          className="quantity-button" 
          disabled={isDisabled}
          onClick={
            () => {
              selectProduct(products => modifyItemQuantity(products, product, false))
            }
          }>-</button>
      </Grid>
    </Grid>
  );
}
 
export default ItemQuantityModifier;