import React from 'react'
import footerstyle from './Footer.module.css';
import { Link } from "react-router-dom";

const Footer = () => {

    const link = <a href={'http://www.noudvandun.com'} target={'blank'} style={{ textDecoration: "none", color: "gray" }}>About</a>
    const geoLink = <a href={'https://www.google.nl/maps/place/Amsterdam/@49.7162772,1.1140208,5z/data=!4m5!3m4!1s0x47c63fb5949a7755:0x6600fd4cb7c0af8d!8m2!3d52.3675734!4d4.9041389'} 
    target={'blank'} style={{ textDecoration: "none", color: "gray" }}>
        21 Dam Square Amsterdam
        </a>

    return (
        <div className={footerstyle.footer}>
            <div className={footerstyle.wrapper}>
                <div className={footerstyle.bsba}>BSBA</div>

                  <div className={footerstyle.socialMedia}>
                        <div className={footerstyle.social}><img src={process.env.PUBLIC_URL + '/icons/facebook.png'} alt="facebook" className={footerstyle.socIcon} /></div>
                        <div className={footerstyle.social}><img src={process.env.PUBLIC_URL + '/icons/insta.png'} alt="insta" className={footerstyle.socIcon} /></div>
                        <div className={footerstyle.social}><img src={process.env.PUBLIC_URL + '/icons/twitter.png'} alt="twitter" className={footerstyle.socIcon} /></div>
                        <div className={footerstyle.social}><img src={process.env.PUBLIC_URL + '/icons/linkedin.png'} alt="linkedin" className={footerstyle.socIcon} /></div>
                  </div>
            </div>

            <div className={footerstyle.wrapper2}>
                <div className={footerstyle.contact}>
                    <span className={footerstyle.dropmealine}>Drop me a line:</span>
                    <span className={footerstyle.dropaline}><img src={process.env.PUBLIC_URL + '/icons/email.png'} style={{ width: "15px" }} alt="email" /> info@bsba.com</span>
                    <span className={footerstyle.dropaline}><img src={process.env.PUBLIC_URL + '/icons/location.png'} style={{ width: "15px" }} alt="email" /> {geoLink}</span>
                    <span className={footerstyle.dropaline}><img src={process.env.PUBLIC_URL + '/icons/telephone.png'} style={{ width: "15px" }} alt="email" /> +31(0)612345678</span>
                </div>
                
            </div>

            <div className={footerstyle.footerinfo}>
                <div className={footerstyle.info}>
                    <div className={footerstyle.wrapper3}>
                        <Link to="/" className={footerstyle.home}><span>Home</span></Link>
                        <span>{link}</span>
                        <span >Customer Service</span>
                    </div>
                <span className={footerstyle.service}>&copy; all rights reserved 2021</span>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
