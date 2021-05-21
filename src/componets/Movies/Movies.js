import React from 'react'
import { Container, Content, Wrap } from './moviesStyle'

const Movies = () => {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/image_bf2c13ad.jpeg?region=0,0,540,810&width=320"/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_theincredibles2_tr_f42d290f.jpeg?region=0,0,540,810&width=320"/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_captainmarvel_19755_3a1675ee.jpeg?region=0,0,540,810&width=320"/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0,0,540,810&width=320"/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/image_2a028710.jpeg?region=0,0,540,810&width=320"/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/image_7ff71125.jpeg?region=0,0,540,810&width=320"/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0,0,540,810&width=320"/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/image_809c2428.jpeg?region=0,0,540,810&width=320"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies
