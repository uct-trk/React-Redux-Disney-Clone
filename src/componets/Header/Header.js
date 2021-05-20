import React from 'react'
import { Nav, Logo, NavMenu, UserImg } from './headerStyle'

const Header = () => {
    return (
        <Nav>
           <Logo src="/images/logo.svg"/>
           <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
           </NavMenu>
           <UserImg src="https://media-exp1.licdn.com/dms/image/C4E03AQFT5jWpZOIMyQ/profile-displayphoto-shrink_100_100/0/1613080447729?e=1626912000&v=beta&t=BxdK_EsAG9eBouj2PeP3mv5LiR1dvUt3IMqAlmkrCUA"/>
        </Nav>
    )
}

export default Header
