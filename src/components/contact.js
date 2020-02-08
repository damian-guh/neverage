import React from "react"
import contactStyles from "../styles/contact.module.scss"
import envelope from "../images/envelope-solid.svg"
import messenger from "../images/facebook-messenger-brands.svg"
const Contact = () => (
    <div className={contactStyles.contact}>
        <h1 className={contactStyles.title}>Kontakt</h1>
        <section className={contactStyles.contactIcons}>
            <a href="https://www.facebook.com/NeverEverAverage/" target="_blank" rel="noopener noreferrer"><img className={contactStyles.messenger} src={messenger} alt="messenger neverage" /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><img className={contactStyles.mail} src={envelope} alt="mail neverage" /></a>
        </section>
        <footer className={contactStyles.footer}>© Neverage created by Damian Głuch</footer>
    </div>
)
export default Contact