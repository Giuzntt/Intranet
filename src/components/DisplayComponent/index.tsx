import { Check, Close, Timelapse } from "@mui/icons-material"
import { Box } from "@mui/material"
import { margin } from "@mui/system"
import { BoxDisplay, TituloCaixa, TextoDisplay, BoxDisplay2, BoxDisplay3 } from "./styles"



interface IDisplayComponent{

}

const  DisplayComponent = ()  => {

    return (
       <Box display={'flex'} sx={{justifyContent: 'space-between'}}>
        <BoxDisplay>
                <TituloCaixa variant="h5">

                Não Solucionado
                </TituloCaixa>

                <Box sx={{
                    margin: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bottom: '0'
                }}>
                <TituloCaixa variant="h5">
                0 
                </TituloCaixa>
                <TextoDisplay >
                 Chamados
                </TextoDisplay>
                
                <Close sx={{
                    color: '#EA8080',
                    fontSize: "135px",
                    position: 'relative',
                    left: '0px'
                    
                }}
                />
                </Box>


        </BoxDisplay>
        <BoxDisplay2>
                <TituloCaixa variant="h5">

                Em andamento
                </TituloCaixa>

                <Box sx={{
                    margin: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bottom: '0'
                }}>
                <TituloCaixa variant="h5">
                0 
                </TituloCaixa>
                <TextoDisplay >
                 Chamados
                </TextoDisplay>
                
                <Timelapse sx={{
                    color: '#FFCC80',
                    fontSize: "115px",
                    position: 'relative',
                    left: '0px'
                    
                }}
                />
                </Box>


        </BoxDisplay2>
        <BoxDisplay3>
                <TituloCaixa variant="h5" sx={{margin:'10px 0px '}}>

                Solucionado
                </TituloCaixa>

                <Box sx={{
                    margin: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bottom: '0'
                }}>
                <TituloCaixa variant="h5">
                0 
                </TituloCaixa>
                <TextoDisplay >
                 Chamados
                </TextoDisplay>
                
                <Check sx={{
                    color: '#80DFD2',
                    fontSize: "115px",
                    position: 'relative',
                    left: '0px'
                    
                }}
                />
                </Box>


        </BoxDisplay3>
       </Box> 

    )
}

export default DisplayComponent