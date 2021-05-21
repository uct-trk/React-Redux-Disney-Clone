import React, {useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Nav, Logo, NavMenu, UserImg, Login,LoginContainer } from './headerStyle'
import {auth, provider} from '../../Firebase/firebase'
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from './../../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'


const Header = () => {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    const history = useHistory()

    // ıf we refresh the page we dont signOut
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/")
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user
            // setUserLogin comes from firebase.js
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push("/")
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            // setSignOut comes from firebase.js
            dispatch(setSignOut())
            history.push("/login")
        })       
    }

    return (
        <Nav>
           <Link to="/"><Logo src="/images/logo.svg" /></Link>
            {/* if username doesnt exist show login button otherwise show client */}
            {
                !userName ? (
                    <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                    </LoginContainer>
                ) :
                    <>
                        <NavMenu>
                            <Link style={{ color: "white", textDecoration: "none" }} to="/">
                                <a>
                                    <img src="/images/home-icon.svg" />
                                    <span>HOME</span>
                                </a>
                            </Link>
                            <a>
                                <img src="/images/search-icon.svg" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src="/images/watchlist-icon.svg" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src="/images/original-icon.svg" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src="/images/movie-icon.svg" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src="/images/series-icon.svg" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <UserImg onClick={signOut} src={userPhoto} />

                    </>
            }
        </Nav>
    )
}

export default Header
