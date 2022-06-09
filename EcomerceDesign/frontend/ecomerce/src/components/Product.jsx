import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import { Button } from '@mui/material'
import MediaCard from './Card';
export default function Product() {
  
  return (
    <div>
      <Link to={"/Addproduct"}>
        <Button>Add Product</Button>
      </Link>
      <Box
        sx={{
          flexGrow: 1,
        }}
        width={"100%"}
      >
        <Grid justifyContent={"center"} container spacing={2}>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item spacing={3}>
            <MediaCard></MediaCard>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}


