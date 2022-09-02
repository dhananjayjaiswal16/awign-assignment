import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import "../sass/table.scss";
import { fetchData } from '../services/api';
import { filterData, generateRows } from '../services/helper';
import SelectFilter from '../components/SelectFilter';
import Spinner from '../components/Spinner';

const rowsPerPage = 10;
const BasicTable = () => {
  const [color, setColor] = useState("");
  const [availability, setAvailability] = useState("");
  const [rows, setRows] = useState([]);
  const [inputTxt, setInputTxt] = useState("");
  const [next, setNext] = useState(rowsPerPage);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setRows(generateRows(data?.products));
    }
    getData();
  }, []);

  const keys = ["name", "color", "availability"];

  const handleChange = (event) => {
    if (event.target.value.length > 2 || event.target.value.length === 0)
      setInputTxt(event.target.value);
  }

  const buttonClick = () => {
    setNext(next + rowsPerPage);
  }
  rows.filtering = () => {
    var filterOptions = {
      availability: availability, color: color
    }
    return filterData(rows, next, inputTxt, keys, filterOptions);

    // res = rows?.slice(0, next).filter(function (item) {
    //   for (var key in filterOptions) {
    //     if (item[key] === undefined || item[key] != filterOptions[key]) {
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }

    // })
  }
  if (rows.length == 0) {
    return <Spinner />;
  }
  return (
    <>
      <input className="searchBox" type="text" onChange={handleChange} placeholder="Search for item name, color or availability..." />
      <div className="filter">
        <SelectFilter field="color" color={setColor} products={rows} />
        <SelectFilter field="availability" availibility={setAvailability} />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"><strong>Id No.</strong></TableCell>
              <TableCell align="left"><strong>Item Name</strong></TableCell>
              <TableCell align="left"><strong>Color</strong></TableCell>
              <TableCell align="left"><strong>Availability</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.filtering().map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.color}</TableCell>
                <TableCell align="left">{row.availability}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {next < rows?.length &&
        <div className="btn">
          <Button variant="contained" onClick={buttonClick}>Load more</Button>
        </div>
      }
    </>
  );
}

export default BasicTable;