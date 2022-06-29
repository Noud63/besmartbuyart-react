import React, { useCallback, useEffect, useState } from 'react';
import headerstyle from './Header.module.css';
import './Submenu.css';
import { Link, useHistory } from "react-router-dom";
import { useGlobalContext } from '../Context'
import Likes from '../likes/Likes'

const Header = () => {

    let { cart, setCart, liked, setLiked, loggedIn, setLoggedIn, userName, setUserName, paintings, setPaintings} = useGlobalContext()

    const [redHeart, setRedHeart] = useState(false)
    const [showLikes, setShowLikes] = useState(false)
    const [scrolled, setScrolled] = useState(true);
    const [view, setView] = useState(false);

    const history = useHistory()

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(false);
            setView(false)
        }
        else {
            setScrolled(true);
        }
    }

    const colorHeart = useCallback(() => {
        if (liked.length > 0) {
            setRedHeart(true)
        } else {
            setRedHeart(false)
        }
    }, [liked.length, setRedHeart])


    useEffect(() => {
        colorHeart()
        window.addEventListener('scroll', handleScroll)
    }, [colorHeart]);


    const showOverlay = (e) => {
        if (liked.length === 0) return
        setShowLikes(!showLikes)
    }

    const show = () => {
        setView(true)
    }

    const hide = () => {
        setView(false)
    }

    const logOut = () => {
        setUserName("")
        setLoggedIn(false)
        setLiked([])
        setCart([])
        localStorage.removeItem('loggedInUser')
        localStorage.removeItem('LIKES')
        localStorage.removeItem('CART')
        if (localStorage.getItem("LIKES") === null) {
            paintings = paintings.map(el => {
                el.like = false
                liked.push(el)
                return el
            })
            setPaintings([...paintings])
            localStorage.setItem('PAINTINGS', JSON.stringify(paintings))
        }
        history.push('/')
    }


    const showUserProfile = () => {
        history.push('/UserScreen')
    }


    return (
        <div className={scrolled ? headerstyle.header : headerstyle.header + ' ' + headerstyle.hide}>
            <div className={headerstyle.subHeader}>

                <div className={view ? 'subMenuLogout show' : 'subMenuLogout'} onMouseLeave={hide}>
                    <div className={headerstyle.logout}>
                        <span className={headerstyle.subMenuTitles} onClick={logOut}>Log Out</span>
                        <span className={headerstyle.subMenuTitles} onClick={showUserProfile}>User profile</span>
                    </div>
                </div>

                <div className={headerstyle.homeLink}>
                    <Link to="/" className={headerstyle.link}>
                        <div className={headerstyle.beSmart}>BE SMART BUY ART</div>
                    </Link>
                </div>

                <div className={headerstyle.menu}>

                    <Link to="/paintings" className={headerstyle.link}>
                        <div className={headerstyle.paintings}>PAINTINGS</div>
                    </Link>

                    <Link to="/cart" className={headerstyle.link}>
                        <div className={headerstyle.shopping_bag}>
                            <div className={headerstyle.bagItems}>
                                <img src={process.env.PUBLIC_URL + '/icons/bag.png'} alt="cart" className={headerstyle.cartIcon} />
                                <span className={headerstyle.inCart}>In Cart</span>
                                <div className={headerstyle.total_items_in_cart}>{cart.length}</div>
                            </div>
                        </div>
                    </Link>
                    {loggedIn ? <div className={headerstyle.link} onMouseEnter={show}><span className={headerstyle.paintings}>{userName}</span></div> : (
                        <div className={headerstyle.link}>
                            <Link to="/signin" className={headerstyle.link}><span className={headerstyle.paintings}>Sign in -</span></Link>
                            <Link to="/signup" className={headerstyle.link}><span className={headerstyle.paintings}> Sign up</span></Link>
                        </div>
                    )
                    }

                    <div className={headerstyle.link}>
                        <div className={headerstyle.likes}>
                            <div className={headerstyle.heart} ><img src={redHeart ?
                                process.env.PUBLIC_URL + '/icons/heartred.png' : process.env.PUBLIC_URL + '/icons/heartgrey.png'}
                                alt="add to wish list" className={headerstyle.wishListIcon} onClick={(e) => showOverlay(e)} />
                            </div>
                        </div>
                    </div>
                    <Likes showLikes={showLikes} setShowLikes={setShowLikes} showOverlay={showOverlay} />
                </div>
            </div>

        </div>
    )
}

export default Header
