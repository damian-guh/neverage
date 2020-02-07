import React from "react"
import Team from "../components/team"
import Hero from "../components/hero"
import Youtube from "../components/youtube"
import Contact from "../components/contact"
import ScrollTop from "../components/ScrollTop"
import layoutStyles from "../styles/layout.module.scss"
import { Helmet } from "react-helmet"
const Layout = () => (
    <div className={layoutStyles.layout}>
        <Helmet>
            <title>
                Neverage.
          </title>
            <meta
                name="description"
                content="Neverage"
            />
            <meta http-equiv="Content-Security-Policy" content="default-src *;
   img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
   style-src  'self' 'unsafe-inline' *"></meta>
            <meta property="og:image" content="https://i.ytimg.com/an/-gBZpERnkw6XAataYZdHFQ/featured_channel.jpg?v=5cdd8f6f" />
        </Helmet>

        <ScrollTop></ScrollTop>
        <Hero></Hero>
        <Team></Team>
        <Youtube></Youtube>
        <Contact></Contact>

    </div>
)
export default Layout