import React,{useEffect, useState} from "react";
// import Adduser from "./adduser";
import Layout from "../components/layout";
import UserTable from "../components/table";
// import { Usersdata } from "../api/api";
import { Grid ,Typography,TextField} from "@mui/material";
import EditModal from "../components/modal/modal";


const Users = () => {
    const [filterdata,setfilterdata] = useState([]);
    const [Searchvalue,setsearchvalue] =useState('');
    const [showmodal,setshowmodal] = useState(false);
    const [Editindex, setEditindex ] =useState();
    // const [hidden,sethidden] = useState(false); 

    const userData =  JSON.parse(localStorage.getItem('data')) 
    useEffect(()=>{
        setfilterdata(userData)
    },[])
    
    useEffect(()=>{
      if (Searchvalue) {
        let Searchresult = filterdata.filter((e)=>        
             (e.email?.toLowerCase().includes(Searchvalue.toLowerCase())) ||
             (e.first_name?.toLowerCase().includes(Searchvalue.toLowerCase())) ||
             (e.first_name?.toLowerCase().includes(Searchvalue.toLowerCase()))  ||
              (e.id==Number(Searchvalue))
              )
        
             setfilterdata(Searchresult)
      }
      else {
        setfilterdata(userData)
      }
        // console.log('Searchresult',Searchresult)
    },[Searchvalue])
    
    return (
        <>
        <Layout>
        <Grid container sx={{ justifyContent: 'space-between' }}>
        <Grid >
          <Typography variant="h4">USERS</Typography>
        </Grid>

        <Grid item mb={5}>
            <TextField
              size='small'
              placeholder='Search'
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}       
              onChange={(e) => {
                setsearchvalue(e.target.value)
              }}
            />
        </Grid>
      </Grid>
           <EditModal showmodal={showmodal} Editindex={Editindex} setshowmodal={setshowmodal} setfilterdata={setfilterdata} filterdata={filterdata}/>
           <UserTable filterdata ={filterdata} setfilterdata={setfilterdata} setshowmodal={setshowmodal} setEditindex={setEditindex} />

        </Layout>
        </>
    )
}
export default Users;