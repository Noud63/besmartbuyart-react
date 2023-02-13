import React, { useCallback, useEffect, useState, useRef } from 'react';
import headerstyle from './Header.module.css';
import './Submenu.css';
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from '../Context'
import Likes from '../likes/Likes'

const Header = () => {

    let { cart, setCart, liked, userName, loggedIn, setLoggedIn, paintings, setPaintings } = useGlobalContext()

    const [redHeart, setRedHeart] = useState(false)
    const [showLikes, setShowLikes] = useState(false)
    const [scrolled, setScrolled] = useState(true);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showPaintingsMenu, setShowPaintingsMenu] = useState(false);

    const navigate = useNavigate()
    const userNameRef = useRef()
    const paintingsRef = useRef()

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(false);
            setShowSubMenu(false)
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

    const subMenuShow = () => {
        setShowSubMenu(prev => !prev)
    }

    const subMenuShowPaintings = () => {
        setShowPaintingsMenu(prev => !prev)
    }

    useEffect(() => {
        const closeSubMenu = (e) => {
            if (e.target !== userNameRef.current) {
                setShowSubMenu(false)
            }
            if (e.target !== paintingsRef.current) {
                setShowPaintingsMenu(false)
            }
        }
        document.body.addEventListener('click', closeSubMenu)
    }, [])

    const logout = () => {
        setLoggedIn(false)
        localStorage.removeItem('USERNAME')
        localStorage.removeItem('LIKES')
        localStorage.removeItem('CART')
        paintings = paintings.map(el => {
            el.like = false
            return el
        })
        liked.length = 0
        setCart([])
        setRedHeart(false)
        setPaintings(paintings)
        localStorage.setItem("PAINTINGS", JSON.stringify(paintings))
        navigate('/')
    }

    const showUserProfile = () => {
        navigate('/userscreen')
    }

    const showPaintings = () => {
        navigate('/paintings')
    }

    const showReproductions = () => {
       navigate('/reproductions')
    }

    return (

        <div className={scrolled ? headerstyle.header : headerstyle.header + ' ' + headerstyle.hide}>


            <div className={showSubMenu ? headerstyle.logoutMenu + ' ' + headerstyle.show : headerstyle.logoutMenu} >
                <div className={headerstyle.subMenuTitles} onClick={logout}>Logout</div>
                <div className={headerstyle.subMenuTitles + ' ' + headerstyle.right} onClick={showUserProfile}>User Profile</div>
            </div>

            <div className={showPaintingsMenu ? headerstyle.paintingsMenu + ' ' + headerstyle.show2 : headerstyle.paintingsMenu} >
                <div className={headerstyle.subMenuTitles} onClick={showPaintings}>Paintings</div>
                <div className={headerstyle.subMenuTitles + ' ' + headerstyle.right} onClick={showReproductions}>Reproductions</div>
            </div>


            <div className={headerstyle.subHeader}>
                <div className={headerstyle.homeLink}>
                    <Link to="/" className={headerstyle.link}>
                        <div className={headerstyle.beSmart}><img src={process.env.PUBLIC_URL + '/icons/bsbalogo.png'} alt="" style={{ width: '1em' }} /> &nbsp;BE SMART BUY ART</div>
                    </Link>
                </div>

                <div className={headerstyle.menu}>

                    <div className={headerstyle.paintings} onClick={subMenuShowPaintings} ref={paintingsRef}>PAINTINGS</div>

                    <Link to="/cart" className={headerstyle.link}>
                        <div className={headerstyle.shopping_bag}>
                            <div className={headerstyle.bagItems}>
                                <img src={process.env.PUBLIC_URL + '/icons/bag.png'} alt="cart" className={headerstyle.cartIcon} />
                                <span className={headerstyle.inCart}>In Cart</span>
                                <div className={headerstyle.total_items_in_cart}>{cart.length}</div>
                            </div>
                        </div>
                    </Link>

                    {loggedIn ? <div className={headerstyle.userName} onClick={subMenuShow} ref={userNameRef}>Hi, {userName} <img src={process.env.PUBLIC_URL + '/icons/link.png'} alt="" style={{ width: '15px' }} /></div> : (
                        <div className={headerstyle.link}>
                            <Link to="/signin" className={headerstyle.link}><span className={headerstyle.paintings}>Sign in -</span></Link>
                            <Link to="/signup" className={headerstyle.link}><span className={headerstyle.paintings}> Sign up</span></Link>

                        </div>
                    )}

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
