import React,{useEffect, useState} from "react";
import Layout from "../components/layout";
import UserTable from "../components/table";
import { Usersdata } from "../api/api";


const Users = () => {
    const [tabledata,setTabledata] = useState([]);

    useEffect(()=>{
        Usersdata()
        .then((res)=>{
            setTabledata(res?.data)
        })
    },[])
    console.log('tabledata',tabledata);

    return (
        <>
        <Layout>
           <h1>Users</h1>
           <UserTable tabledata={tabledata}/>
        </Layout>
        </>
    )

}
export default Users;