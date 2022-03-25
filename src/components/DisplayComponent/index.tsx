import { AddAlarm, Check, Close, Timelapse } from "@mui/icons-material"
import { Box } from "@mui/material"
import axios from "axios";
import { log } from "console";
import { useEffect, useState } from "react";
import client from "../../api/api";

import { BoxDisplay, TituloCaixa, TextoDisplay, ContainerDisplay } from "./styles"
import { IDisplayComponent, ItemDisplayComponent } from "./types";


const DisplayComponent = ({display}: IDisplayComponent) =>{
      
    //tipar estado com a propriedade display
    const [displayComponent, setDisplayComponent] = useState<ItemDisplayComponent[]>([])
    

    //dar um get na api da intranet
    const getPanel = async () => {
        const response = await client.get('/intranet')    
        console.log(response.data)
        setDisplayComponent(response.data)
    }

    useEffect(() => {
        getPanel()
    },[display])

    return(
            <ContainerDisplay>
                {
                     displayComponent.map((item, index) => {
                return(
                    <BoxDisplay key={index} cor={item.colorDiferente}>
                        <TituloCaixa variant="h5">{item.title}</TituloCaixa>
                        <Box sx={{
                    margin: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bottom: '0'
                }}>
                <TituloCaixa variant="h5">
                {item.numeroChamados}
                </TituloCaixa>
                <TextoDisplay >
                 {item.nomeItem}
                </TextoDisplay>
                {
                    item.icons
                }
                
                </Box>
                    </BoxDisplay>

                )
            }
                     )
                }
                
            </ContainerDisplay>
        
    )
}

export default DisplayComponent;
          