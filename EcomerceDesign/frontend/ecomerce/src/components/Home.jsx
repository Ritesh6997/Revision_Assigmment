import React from 'react'
import { Button } from "@mui/material";
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <Link to={"/Brand"}>
        <Button>Add Brand</Button>
      </Link>
      <Link to={"/Address"}>
        <Button>Add Address</Button>
      </Link>
    </div>
  );
}
