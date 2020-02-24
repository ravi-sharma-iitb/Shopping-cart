import React, { useRef, useState } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import SizeEle from './SizeEle';
import  './Sizes.css';

const Sizes = ({setSize}) => {
  let sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
  console.log('Sizes rendering');
  return (
    <Box pl={3}>
      <Grid container>
        <Grid item xs={12}>
          <Box mb={1}>
            <Typography variant="subtitle1">
              <b>
                Sizes:
              </b>
            </Typography>
          </Box>
        </Grid>
        {sizes.map((size, index) => (
          // getSizeEle(size, setSize, index)
          <SizeEle 
            size={size}
            setSize={setSize}
            key={index}/>
        ))}
      </Grid>
    </Box>
  );
}
 
export default React.memo(Sizes);