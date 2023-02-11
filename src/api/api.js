import axios from "axios";

export const Usersdata = () => {
  return axios.get('https://reqres.in/api/users')
    .then((res) => {
      if (res.status) {
        console.log("res",res);
        return res?.data
      }
    })
    .catch((err) => {
      return err
    })
}


export const Adduserdata = (userData) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  };
  return axios.post('https://reqres.in/api/users', requestOptions)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error?.response?.data?.message;
    })


}