import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material'
export default function Product() {
  return (
    <div>
      <Link to={"/Addproduct"}>
        <Button>Add Product</Button>
      </Link>
    </div>
  );
}
