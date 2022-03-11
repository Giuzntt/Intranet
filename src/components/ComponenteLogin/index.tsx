import {  Google, LinkedIn, Twitter } from "@mui/icons-material"
import { Box, TextField, Button, Fab, Typography, ThemeProvider } from "@mui/material"
import { BoxImagem } from "./styles"


const  ComponentLogin = () =>{
    return (  
      <>
          <BoxImagem>
           
            <img src="assets/images/suporte-online.png" width={128} height={128}  />
          </BoxImagem>
          <Box 
            display={'grid'} 
            sx={{
              width: 300,
              height: 200,
            }}
            >
           <TextField
             id=""
             label="Login"
             variant="outlined"
             color="primary"
           />
           <TextField
             id=""
             label="Senha"
             variant="outlined"
             color="primary"
             type={'password'}
           />
            <Button variant="contained"  sx={{fontWeight:'bold'}}>
              Entrar
            </Button>
            
            

          </Box>
          <Box display={'flex'} 
          sx={{
             marginTop: 5,
             width: 300,
             justifyContent:'space-between'
          }}>
            <Fab color="info" aria-label="add">
              <Twitter/>
            </Fab>
            <Fab color="error" aria-label="add">
              <Google />
            </Fab>
            <Fab color={'primary'} aria-label="add">
              <LinkedIn />
            </Fab>
           
            </Box>
          </>
       

    )
}



export default ComponentLogin