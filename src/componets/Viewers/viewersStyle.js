import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 25px;
    padding: 30px 0px 26px;
`
export const Wrap = styled.div`

    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 300ms ease;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    // wrap hover
    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`
