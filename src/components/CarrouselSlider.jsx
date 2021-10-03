import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/components/carrouselSlider.css'
import pizzaMargarita from "../img/pizza_margarita.jpg";
import pizza2 from "../img/Pizza2.jpg";
import pizza3 from "../img/pizza3.jpg";
import pizza4 from "../img/pizza4.jpg";
import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';



const CarrouselSlider = () => {


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500
      };

    return (
        <Slider {...settings} className="carrousel__container">
            <Box
                height="100%"
                width="100%"
            >
                <Image
                    src={pizzaMargarita}
                    objectFit="cover"
                    height={["250px", "250px", "300px", "300px"]}
                    width="100%"
                />
            </Box>
            <Box
                height="100%"
                width="100%"
            >
                <Image
                    src={pizza2}
                    objectFit="cover"
                    height={["250px", "250px", "300px", "300px"]}
                    width="100%"
                />
            </Box>
            <Box
                height="100%"
                width="100%"
            >
                <Image
                    src={pizza3}
                    objectFit="cover"
                    height={["250px", "250px", "300px", "300px"]}
                    width="100%"
                />
            </Box>
            <Box
                height="100%"
                width="100%"
            >
                <Image
                    src={pizza4}
                    objectFit="cover"
                    height={["250px", "250px", "300px", "300px"]}
                    width="100%"

                />
            </Box>
            
        </Slider>
    )
}

export default CarrouselSlider
