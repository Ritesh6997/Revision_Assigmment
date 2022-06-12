import  React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import { Button, ButtonBase, Card, MenuItem, Select, Typography } from '@mui/material'
import MediaCard from './Card';
import axios from "axios";
import { useSearchParams } from "react-router-dom";
export default function Product() {
  const [productData, setProductData] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams({});
  const [count, setCount] = useState([1]);
  const [sort, setSort] = useState(["_id","1"]);
  const [filter, setfilter] = useState([]);
  const [page, setPage] = useState(Number(searchParams.get("page") || 1));
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/product?page=${page}&sort=${sort}&filter=${filter}`
      )
      .then((res) => {
        console.log(res.data.product);
        setProductData([...res.data.product]);
        let num = res.data.count;
        let count = [];
        for (let i = 1; i <= num; i++) {
          count.push(i);
        }
        setCount([...count]);
      });
  }, [page, sort, filter]);
  useEffect(() => {
    setSearchParams({ page,sort,filter });
  }, [page, sort, filter,setSearchParams]);
  return (
    <div>
      <Card sx={{display:"flex", justifyContent:"space-evenly",alignContent:"center", mb:2}}>
        <Link to={"/Addproduct"}>
          <Button sx={{mt:1}}>Add Product</Button>
        </Link>
        <Select
          onChange={(e) => {
            {
              e.target.value === "0" || e.target.value === ""
                ? setSort(["_id", 1])
                : setSort(["price", e.target.value]);
            }
          }}
          defaultValue={"0"}
          name=""
          id=""
        >
          <MenuItem value="0">Sort By Price</MenuItem>
          <MenuItem value="1">Low to High</MenuItem>
          <MenuItem value="-1">High to Low</MenuItem>
        </Select>
      </Card>
      <Box
        sx={{
          flexGrow: 1,
        }}
        width={"100%"}
      >
        <Grid justifyContent={"center"} container spacing={2}>
          {productData.length > 0 &&
            productData.map((ele) => (
              <Grid item spacing={3}>
                <MediaCard ele={ele}></MediaCard>{" "}
              </Grid>
            ))}
        </Grid>
      </Box>
      {page !== 1 ? (
        <Button
          button
          onClick={() => {
            setPage((prev) => (prev > 1 ? prev - 1 : 1));
          }}
        >
          prev
        </Button>
      ) : (
        " "
      )}
      {count.length > 0 &&
        count.map((ele) => (
          <Button variant='contained'
            sx={{m:1,bgcolor:"#dcd8d8",color:"black",fontWeight:"bolder"}}
            onClick={() => {
              setPage(ele);
            }}
          >
            {ele}
          </Button>
        ))}

      {page !== count.length ? (
        <Button
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Next
        </Button>
      ) : (
        " "
      )}
    </div>
  );
}
