import React, { useState } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';
import Products from './Products';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Grid from '@material-ui/core/Grid';
import Sizes from './Sizes';
import { Box } from '@material-ui/core';
import PriceFilter from './priceFilter';

const Home = () => {
  const [size, setSize] = useState({});
  const [filter, setFilter] = useState("");
  console.log('size :', size);
  return ( 
    <>
      <Box pt={7}>
        <Grid container>
          <Grid item xs={12}>
            <PriceFilter filter={filter} setFilter={setFilter} />
          </Grid>
          <ShoppingCartContext>
            <Grid item xs={2}>
              <Sizes setSize={setSize} />
            </Grid>
            <Grid item xs={10}>
                <Products filter={filter} size={size} />
                <ShoppingCart />
            </Grid>
          </ShoppingCartContext>
        </Grid>
      </Box>
    </>
  );
}
 
export default Home;