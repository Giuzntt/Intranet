import { Title } from '@mui/icons-material'
import { Typography, Button } from '@mui/material'
import CarrouselComponent from '../components/CarrouselComponent'
import DisplayComponent from '../components/DisplayComponent'
import { stageDisplayComponent } from '../components/DisplayComponent/display-objects'
import { BoxConteudo } from './style'





const  Home  = () =>{
    return (
    <BoxConteudo>
      <Typography variant="h3" color="initial" sx={{fontFamily:'Quicksand, sans-serif'}}>
        Dashboard
        </Typography>
      <DisplayComponent displayComponent={stageDisplayComponent}/>
       <Typography variant="h3" color="initial" sx={{fontFamily:'Quicksand, sans-serif'}}>
        Chamados Recentes em Aberto
        </Typography>
        <CarrouselComponent/>

    </BoxConteudo>

    )

}

export default Home