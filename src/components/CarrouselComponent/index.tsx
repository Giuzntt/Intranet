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





const CarrouselComponent = () =>{  
  return (
        <Box sx={{height: '200px'}}>

           <ContainerCarrousel>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ContainerSlide>
                 <Box display={'grid'}>
                  <Image src="/assets/images/user.png" alt="logo" width="128" height="128" className="img-teste" />
                  <TextoNome variant="h6" >Matheus Silva</TextoNome>
                 </Box>
                      
                  <ImagemSlide>
                    <TextoSlide variant="h4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio dolorem? Obcaecati in debitis doloremque perspiciatis modi dignissimos ullam accusantium veritatis reprehenderit vel laboriosam consequuntur voluptatum, asperiores voluptatibus molestias cum.
                    </TextoSlide>
                    
                  </ImagemSlide>
                 
            </ContainerSlide>
        </SwiperSlide>
        <SwiperSlide>
            <ContainerSlide>
                 <Box display={'grid'}>
                  <Image src="/assets/images/fundo.jpg" alt="logo" width="128" height="128" className="img-teste" />
                  <TextoNome variant="h6" >José Pereira</TextoNome>
                 </Box>
                      
                  <ImagemSlide>
                    <TextoSlide variant="h4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio dolorem? Obcaecati in debitis doloremque perspiciatis modi dignissimos ullam accusantium veritatis reprehenderit vel laboriosam consequuntur voluptatum, asperiores voluptatibus molestias cum.
                    </TextoSlide>
                    
                  </ImagemSlide>
            </ContainerSlide>
        </SwiperSlide>
      </Swiper>
        </ContainerCarrousel>
        </Box>
    )

}


export default CarrouselComponent