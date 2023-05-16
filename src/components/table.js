import  React,{useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button, Typography } from '@mui/material';

  

export default function UserTable({filterdata,setfilterdata,setshowmodal,setEditindex}) {
  console.log('filterdata',filterdata)
  const [sortshowbtn, setshowbtn] = useState(false);

  
  const handlesortacending = (item) => {
    setshowbtn(true)
      filterdata.sort((a,b)=>a[item] -b[item] )
  }
  const handlesortdecending = (item) => {
    setshowbtn(false)
      filterdata.sort((a,b)=>b[item] -a[item] )
  }

  const handleDelete = (id) => {
      const removeElement =   filterdata.filter((e)=>e.id!==id)
      setfilterdata(removeElement)
     localStorage.setItem('data',JSON.stringify(removeElement))
  }

  const handleEdit = (index) => {
    console.log(index)
    setshowmodal(true)
    setEditindex(index)
    
  }
  

  


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="right">id {sortshowbtn ? <ArrowUpwardIcon onClick={()=>handlesortdecending("id")}/> : <ArrowDownwardIcon onClick={()=>handlesortacending("id")}/>} </TableCell>
            <TableCell align="right">Name{sortshowbtn ? <ArrowUpwardIcon onClick={()=>handlesortdecending("first_name")}/> : <ArrowDownwardIcon onClick={()=>handlesortacending("first_name")}/>}</TableCell>
            <TableCell align="right">Email {sortshowbtn ? <ArrowUpwardIcon onClick={()=>handlesortdecending("email")}/> : <ArrowDownwardIcon onClick={()=>handlesortacending("email")}/>} </TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterdata && filterdata.map((data,index) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img width ={50} alt="image not found" src={data?.avatar}/>
              </TableCell>
              <TableCell align="right">{data.id}</TableCell>
              <TableCell align="right">{data.first_name+' '+ data.last_name}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
              <TableCell align='right'><Button onClick={()=>handleDelete(data.id)}>Delete</Button></TableCell>
              <TableCell align='right'><Button onClick={()=>handleEdit(index)}>Edit</Button></TableCell>
            </TableRow>
          
          )) || <h1>data not found</h1>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}