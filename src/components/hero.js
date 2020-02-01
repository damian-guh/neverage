import React from "react"
import heroStyles from "../styles/hero.module.scss"
import logo from "../images/guh.png"
import facebook from "../images/facebook-f-brands.svg"
import instagram from "../images/instagram-brands.svg"
import youtube from "../images/youtube-brands.svg"
import arrow from "../images/arrow-down.svg"
import Nav from '../components/nav';
const Hero = () => (
    <div className={heroStyles.hero}>
        <Nav></Nav>
        <img src={logo} className={heroStyles.logo} alt="logo" />
        <section className={heroStyles.socialIcons}>
            <a href="https://www.facebook.com/NeverEverAverage/" target="_blank" rel="noopener noreferrer"><img src={facebook} className={heroStyles.facebook} alt="neverage facebook" /></a>
            <a href="https://www.instagram.com/neverage_music/?hl=pl" target="_blank" rel="noopener noreferrer"><img src={instagram} className={heroStyles.instagram} alt="neverage instagram" /></a>
            <a href="https://www.youtube.com/channel/UC-gBZpERnkw6XAataYZdHFQ" target="_blank" rel="noopener noreferrer"><img src={youtube} className={heroStyles.youtube} alt="neverage youtube" /></a>
        </section>
        <img src={arrow} className={heroStyles.arrowDown} alt="arrow down" />
    </div>
)
export default Hero