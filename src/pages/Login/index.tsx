
import {  ContainerImagem,  Gradiente, Panel, PNGImage } from "./style"
import { useState } from "react"
import ComponentLogin from "../../components/ComponenteLogin"
import ImageLogo from '../../public/assets/images/teste.png'
import { Box, Typography } from "@mui/material"




const LoginPage  = () =>{
    const [login, setLogin] = useState('')

    return (
    
    
    <Panel>
                <Box>
                 <ContainerImagem>
                                <Gradiente>
                                    <Typography variant="h2" color="white"  sx={{fontFamily:'Poppins', margin:'130px'}}>
                                        Solução é Conosco
                                    </Typography>
                                    <PNGImage>

                                    <img src="assets/images/fundo-login.png"   />
                                    </PNGImage>

                                </Gradiente>
                    </ContainerImagem>  
                </Box>
        <Box 
        display={'block'} 
        sx={{
            margin:'auto',
            padding:'45px',
            borderRadius: '10px',
            backgroundColor:'white',
            boxShadow:'0px 4px 4px 2px rgba(0, 0, 0, 0.2);',
           
    }}


        >
                 <ComponentLogin/>    
        </Box>
    </Panel>
                    
                
            
    )


}

export default LoginPage