import React from 'react';
import navStyles from "../styles/nav.module.scss"
class Nav extends React.Component {
    scrollTeam = (event) => {
        if (event.target.getAttribute('id') === "team") {
            document.documentElement.scrollTop = window.innerHeight - 1;
        }
        else if (event.target.getAttribute('id') === "newest") {
            document.documentElement.scrollTop = (window.innerHeight) * 2;
        }
        else if (event.target.getAttribute('id') === "contact") {
            document.documentElement.scrollTop = (window.innerHeight) * 3;
        }
    }
    render() {
        return (
            <nav className={navStyles.nav}>
                <ul className={navStyles.navItems}>
                    <li id="team" onClick={this.scrollTeam} className={navStyles.navItem}>O nas</li>
                    <li id="newest" onClick={this.scrollTeam} className={navStyles.navItem}>Najnowsze</li>
                    <li id="contact" onClick={this.scrollTeam} className={navStyles.navItem}>Kontakt</li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
