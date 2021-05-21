import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = styled(Slider)`
    margin-top: 20px;

    .slick-list{
        overflow: visible;
    }

    li.slick-active button:before{
        color: white;
    }

    ul li button{
        &:before{
            font-size: 10px;
            color: white;
        }
    }

    button{
        z-index: 1;
    }
`

export const Wrap = styled.div`
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0  / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition: 300ms;

        &:hover{
            border: 4px solid rgba(249,249,249, 0.8);
            cursor: pointer;
        }
    }
`