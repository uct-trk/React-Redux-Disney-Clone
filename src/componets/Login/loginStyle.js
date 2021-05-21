import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    align-items: top;
    display: flex;
    justify-content: center;
   

    &:before{
        background-position: top;
        position: absolute;
        background-size: cover;
        background-repeat: no-repeat;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        background-image: url("/images/login-background.jpg");
        z-index: -1;
        opacity: 0.8;
    }
`;

export const ContentBox = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
   
`

export const ContentLogoOne = styled.img`

`

export const ContentLogoTwo = styled.img`

`

export const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: all 300ms ease;
    margin-top: 15px;
    margin-bottom: 15px;

    &:hover{
        background: #0483ee
    }
`

export const Description = styled.p`
    font-size: 11px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    text-align: center;
    margin-bottom: 15px;
`