import React from 'react'
import { Container, Content, Wrap } from './moviesStyle'
import {selectMovies} from '../../features/movie/movieSlice'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Movies = () => {
    const movies = useSelector(selectMovies)

    console.log("This is movies", movies)
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                {/* if movies exist */}
                {movies && 
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg}/>
                            </Link>
                        </Wrap>
                    ))
                }
               
            </Content>
        </Container>
    )
}

export default Movies
