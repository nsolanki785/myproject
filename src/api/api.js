import axios from "axios";

 export const Usersdata = () => {
    return axios.get('https://reqres.in/api/users')
       .then((res)=>{
         if (res.status) {
            return res?.data
         }
       })
       .catch((err)=>{
         return err
       })
}

 export const Adduserdata = (userData) => {
   return axios.post('https://reqres.in/api/users',userData)
   
 }