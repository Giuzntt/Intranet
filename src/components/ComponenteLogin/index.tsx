import { Facebook, Google, LinkedIn } from "@mui/icons-material"
import { Box, TextField, Button, Fab } from "@mui/material"
import Image from "next/image"
import  teste from "../../assets/images/teste.png"


const  ComponentLogin = () =>{
    return (  
      <>
            <Image src={teste} layout={'responsive'} />
          <Box 
            display={'grid'} 
            sx={{
              width: 300,
              height: 200
            }}
            >
            <TextField
              id="login"
              label="Login"
            />
            <TextField
              id="login"
              label="Senha"
            />
            <Button variant="outlined" >
              Entrar
            </Button>
            
            

          </Box>
          <Box display={'flex'} 
          sx={{
             marginTop: 5,
             width: 300,
             justifyContent:'space-between'
          }}>
              <Fab color="default" >
              <Google/>
            </Fab>
            <Fab color="default">
              <Facebook/>
            </Fab>
            <Fab color="default">
              <LinkedIn/>
            </Fab>
            </Box>
          </>
       

    )
}



export default ComponentLogin