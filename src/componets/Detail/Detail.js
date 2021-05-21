import React, {useEffect, useState} from 'react'
import { Container, Background, ImageTitle, Controls, PlayButton, TrailerButton, AddButton, GroupWatchButton, SubTitle, Description } from './detailStyles'
import {useParams} from 'react-router-dom'
import db from '../../Firebase/firebase'

const Detail = () => {

    const [movie, setMovie] = useState("")

    const {id} = useParams()
    console.log("useParams", id)

    useEffect(() => {
        // Grab the movie from DB (firebase database)
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                // save the movie data
                setMovie(doc.data())
            } else{
                // redirect to homepage
            }
        })
    },[])

    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} />
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {movie.subTitle}
            </SubTitle>
            <Description>
              {movie.description}
            </Description>
        </Container>
    )
}

export default Detail
