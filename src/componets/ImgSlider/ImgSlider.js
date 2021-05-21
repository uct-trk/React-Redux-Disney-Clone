import React from 'react'
import { Carousel, Wrap } from './imgSliderStyle'


const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg"/>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider
