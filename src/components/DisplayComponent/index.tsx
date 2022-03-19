import { AddAlarm, Check, Close, Timelapse } from "@mui/icons-material"
import { Box } from "@mui/material"

import { BoxDisplay, TituloCaixa, TextoDisplay } from "./styles"
import { IDisplayComponent } from "./types";



const DisplayComponent = ({
    displayComponent
}: IDisplayComponent) =>{

    return(
   <>{
        displayComponent.map(({
            title, icons:Icons, numeroChamados, colorDiferente 
        }, index)=>(
            <Box display={'flex'} key={index} sx={{justifyContent: 'space-between'}}>
                <BoxDisplay cor={colorDiferente}>
                <TituloCaixa variant="h5">
                    {title}
                </TituloCaixa>
                
                <Box sx={{
                    margin: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bottom: '0'
                }}>
                <TituloCaixa variant="h5">
                {numeroChamados}
                </TituloCaixa>
                <TextoDisplay >
                 Chamados
                </TextoDisplay>
                
                <Icons sx={{
                    color: '#EA8080',
                    fontSize: "120px",
                    position: 'relative',
                    left: '0px'
                    
                }}
                />
                </Box>
                </BoxDisplay>
                </Box> 
        )
        )
   }</>

        )
}


export default DisplayComponent