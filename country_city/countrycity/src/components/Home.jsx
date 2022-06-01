import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Form from './Form';
import AddData from './AddData';
import AddCountry from './AddCountry';
import { getCountryData} from '../Redux/AddCountry/Action';
import { DeleteCity, getCityData } from "../Redux/AddCity/Action";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Home() {
  const dispatch = useDispatch();
  const CityData = useSelector((store) => store.CitysName.AddCity);
    const CountryData = useSelector((store) => store.CountrysName.AddCountry);
    console.log(CityData,"cityDataaa111")
  useEffect(() => {
    dispatch(getCountryData());
    dispatch(getCityData());
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">id</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Population</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                      {CityData.length!==0?
                          CityData.map((ele) => (
                              <StyledTableRow key={ele.id}>
                                  <StyledTableCell component="th" scope="row" align="center">
                                      {ele.id}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">{ele.country}</StyledTableCell>
                                  <StyledTableCell align="center">{ele.city}</StyledTableCell>
                                  <StyledTableCell align="center">
                                      {ele.population}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                      <Button>
                                          <Form value={ele}></Form>
                                      </Button>
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                <Button onClick={() => {
                                  dispatch(DeleteCity(ele))
                                  axios.delete(
                                    `http://localhost:8080/citydata/${ele.id}`
                                  );
                                      }}>Delete</Button>
                                  </StyledTableCell>
                              </StyledTableRow>
                          ))
                      :""}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <AddData></AddData>
        <AddCountry></AddCountry>
      </div>
    </>
  );
};

