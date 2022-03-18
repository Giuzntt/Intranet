import { Title } from '@mui/icons-material'
import { Typography, Button } from '@mui/material'
import DisplayComponent from '../components/DisplayComponent'
import { BoxConteudo } from './style'





const  Home  = () =>{
    return (
    <BoxConteudo>
      <Typography variant="h3" color="initial" sx={{fontFamily:'Quicksand, sans-serif'}}>
        Dashboard
        </Typography>
      <DisplayComponent/>
        
    </BoxConteudo>

    )

}

export default Home