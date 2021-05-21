import React from 'react'
import { Container,ContentBox,ContentLogoOne,SignUp,Description,ContentLogoTwo } from './loginStyle'

const Login = () => {
    return (
        <Container>
            <ContentBox>
                <ContentLogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <ContentLogoTwo src="/images/cta-logo-two.png"/>
            </ContentBox>
        </Container>
    )
}

export default Login
