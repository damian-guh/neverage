import React from "react"
import Team from "../components/team"
import Hero from "../components/hero"
import Youtube from "../components/youtube"
import Contact from "../components/contact"
import ScrollTop from "../components/ScrollTop"
import layoutStyles from "../styles/layout.module.scss"
const Layout = () => (
    <div className={layoutStyles.layout}>
        <ScrollTop></ScrollTop>
        <Hero></Hero>
        <Team></Team>
        <Youtube></Youtube>
        <Contact></Contact>
    </div>
)
export default Layout