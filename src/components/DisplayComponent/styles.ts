import { Box, styled, Typography } from "@mui/material";
import { ItemDisplayComponent } from "./types";

interface IBoxDisplayProps {
    cor: string;

}

export const BoxDisplay  = styled(Box)<IBoxDisplayProps> `
    border: 1px solid ${({cor}) => cor ?? 'white'};
    border-radius: 5px;
    background-color: ${({cor}) => cor ?? 'white'};
    width: 272px;
    height: 256px;
    filter:drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); 
    margin-top: 15px;
    
    `
// export const BoxDisplay2 = styled(Box)`
    
//     border: 1px solid #FF9800;
//     border-radius: 5px;
//     background-color: #FF9800;
//     width: 272px;
//     height: 256px;
//     filter:drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); ;
//     margin-top: 15px;
    
//     `
// export const BoxDisplay3 = styled(Box)`
    
//     border: 1px solid #00BFA5;
//     border-radius: 5px;
//     background-color: #00BFA5;
//     width: 272px;
//     height: 256px;
//     filter:drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); ;
//     margin-top: 15px;
    
//     `


export const TituloCaixa = styled(Typography)`
    color: white;
    font-size: 4.5ch;
    font-family: 'Poppins';
`
export const TextoDisplay = styled(Typography)`
    color: white;
    margin: 5px;
    font-size: 2.6ch;
    font-family: 'Quicksand';
`