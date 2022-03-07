import { Box } from "@mui/system"
// import type { NextPage } from "next"
// import TextField from '@mui/material/TextField'
import { useState } from "react"
import TextField from '@mui/material/TextField'
import Form from "../../components/Form"
import { actionLogin } from "./config-objects"







const LoginPage = () =>{
   
    const [defaultValues, setDefaultValues] = useState({});

  
        
    return(
          
      <Box>
        
         <Form
              defaultValues={defaultValues}
              
              fields={actionLogin}
               onSubmit={onSubmit}
              
            />

         

      </Box>
    )
}

export default LoginPage