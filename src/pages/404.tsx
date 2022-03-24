import Image from "next/image";
import { Box404 } from "../assets/404Style/style404";
import Typography from '@mui/material/Typography'
import Link from "next/link";
import Button from '@mui/material/Button'



export default function Custom404(){
        return (
            <>
                <Box404>
                    <Typography variant="h3" color="gray" sx={{fontFamily:'Poppins'}}> Essa página ainda não foi desenvolvida ou  você está no perdido! 
                       
                    </Typography>
                    <Typography variant="h1" color="gray" sx={{fontFamily:'Poppins', textAlign:'center', transform: 'rotate(90deg);', fontSize:'20rem'}}> :(</Typography>
                    

                     <Link href={'./'}  passHref>
                        <Typography variant="h3" color="gray" sx={{fontFamily:'Poppins', textAlign:'center', color: '#2196F3'}}>
                                   <a>Clique aqui para voltar para Home!</a>
                        </Typography>
                           
                    </Link>

                   
                </Box404>
            </>
        )
}

