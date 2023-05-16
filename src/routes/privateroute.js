import React from "react"
import Login from "../pages/login/login"

const Privateroute = ({secretID,children}) => {
   return (!secretID ? <Login/> :{children})
}
export default Privateroute;
