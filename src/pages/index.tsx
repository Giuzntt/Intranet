import { NextPage } from "next"
import {  ContainerImagem,  Gradiente, Panel } from "./style"
import TextField from '@mui/material/TextField'
import { useState } from "react"
import Image from "next/image"
import ComponentLogin from "../components/ComponenteLogin"
import ImageLogo from '../../public/assets/images/teste.png'
import { Box, Typography } from "@mui/material"
import CardContainer from "../components/CardContainer"



const HomePage: NextPage = () =>{
    const [login, setLogin] = useState('')

    return (
    
    
    <Panel>
                <Box>
                 <ContainerImagem>
                                <Gradiente>
                                    <Typography variant="h1" color="white" textAlign={'center'}>
                                        Olá mundo!   
                                    </Typography>
                                </Gradiente>
                    </ContainerImagem>  
                </Box>
        <Box 
        display={'block'} 
        sx={{margin:'auto'}}

        >
                 <ComponentLogin/>    
        </Box>
    </Panel>
                    
                
            
    )


}

export default HomePage