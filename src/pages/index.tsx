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
                                    <Typography variant="h5" color="white" textAlign={'center'}>
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat corrupti! Provident perferendis explicabo molestias a. Reiciendis facere, cupiditate nihil nostrum iusto libero dolorem natus illum, et dicta incidunt consequatur? 
                                    </Typography>
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
            boxShadow:'0px 4px 4px 2px rgba(0, 0, 0, 0.2);'

            
    }}


        >
                 <ComponentLogin/>    
        </Box>
    </Panel>
                    
                
            
    )


}

export default HomePage