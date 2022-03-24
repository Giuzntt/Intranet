import { Typography } from '@mui/material'
import { BoxConteudo } from '../assets/HomePageStyle/styleHomePage'
import CarrouselComponent from '../components/CarrouselComponent'
import DisplayComponent from '../components/DisplayComponent'
import { stageDisplayComponent, stagePanelComponent } from '../components/DisplayComponent/display-objects'






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
       <Typography variant="h3" color="initial" sx={{fontFamily:'Quicksand, sans-serif'}}>
        Termomêtro
        </Typography>
        <DisplayComponent displayComponent={stagePanelComponent}/>
    </BoxConteudo>

    )

}

export default Home