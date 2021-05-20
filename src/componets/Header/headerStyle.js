import styled from 'styled-components'

export const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`


export const Logo = styled.img`
    width: 80px;
`

export const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 300ms ease;
                transform-origin: left;
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

export const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`