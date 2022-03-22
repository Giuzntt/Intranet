import { Box, styled, Typography } from "@mui/material";




export const ContainerCarrousel = styled(Box)`
    width: 100%;
    height: 550px;
    border-radius: 1px solid black;


`
export const ContainerSlide = styled(Box)`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ImagemSlide = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

`
export const TextoSlide = styled(Typography)`
   font-family: 'Quicksand';
   font-size: 20px;
  text-justify: inter-word;
    

`
export const TextoNome = styled(Typography)`
   font-family: 'Quicksand';
   font-size: 20px;
   width: 130px;
    

`
