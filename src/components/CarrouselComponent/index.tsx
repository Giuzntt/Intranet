import { ContainerCarrousel, ContainerSlide,ImagemSlide,TextoSlide,TextoNome } from "./styles"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ICarrouselComponentProps } from "./types";
import client from "../../api/api";


//criar um estado com o nome slide, com requisição api
 

const CarrouselComponent = () =>{  
  const [ slide, setSlide] = useState<ICarrouselComponentProps[]>([])

  const getSlide = async () => {
    const response = await client.get('/carrousel')    
    console.log(response.data)
    setSlide(response.data)
  }

     useEffect(() => {
    getSlide()
  },[])
 
 


  return (
        <Box sx={{height: '200px'}}>

           <ContainerCarrousel>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                  }}
                  loop
                  >
                      {
                          slide.map(({username, containerText, id}) => {
                              return(
                                  <SwiperSlide key={id}>
                                      <ContainerSlide>
                                         <Box display={'grid'}>
                                             
                                                  <Image src="/assets/images/user.png" alt="logo" width="128" height="128" className="img-teste" />
                                             
                                              <TextoNome>{username}</TextoNome>
                                         </Box>
                                           <ImagemSlide>
                                          <TextoSlide>
                                              {containerText}
                                          </TextoSlide>
                                          </ImagemSlide>
                                      </ContainerSlide>
                                  </SwiperSlide>
                              )
                          })
                      } 
        
      </Swiper>
        </ContainerCarrousel>
        </Box>
    )

}


export default CarrouselComponent