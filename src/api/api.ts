import axios from 'axios';



  const client = axios.create({
    baseURL: 'https://623c6a2c8e9af5878950bfc2.mockapi.io/',
    headers:{
        'Content-Type': 'application/json'
    }});




    export default client