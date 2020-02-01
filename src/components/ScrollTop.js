import React from 'react';
import scrollTopStyles from "../styles/scrollTop.module.scss"
import arrowRight from "../images/arrow-right.svg"
class ScrollTop extends React.Component {
    state = {
        active: false
    }
    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                this.setState({
                    active: true
                })
            }
            else {
                this.setState({
                    active: false
                })
            }
        })
    }
    handleScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <img src={arrowRight} className={`${scrollTopStyles.scroll} ${this.state.active ? scrollTopStyles.active : ""}`} onClick={this.handleScroll} alt="scroll top" />
        );
    }
}

export default ScrollTop;