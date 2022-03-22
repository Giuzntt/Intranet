import { AddAlarm, Check, Close, Timelapse } from "@mui/icons-material"
import { Box } from "@mui/material"

import { BoxDisplay, TituloCaixa, TextoDisplay, ContainerDisplay } from "./styles"
import { IDisplayComponent } from "./types";



const DisplayComponent = ({
    displayComponent,
   
    
}: IDisplayComponent) =>{

    return(
   <><ContainerDisplay  >
   {
        displayComponent.map(({
            title, icons:Icons, numeroChamados,nomeItem, colorDiferente, colorIcon 
        }, index)=>(
            
                <BoxDisplay key={index} cor={colorDiferente}>
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
                 {nomeItem}
                </TextoDisplay>
                
                <Icons sx={{
                    color: '#FFF',
                    fontSize: "120px",
                    position: 'relative',
                    left: '0px'
                    
                }}
                />
                </Box>
                </BoxDisplay>
                
                )
                )
            }
            </ContainerDisplay>
            </>

        )
}


export default DisplayComponent