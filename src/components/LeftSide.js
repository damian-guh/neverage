import React from 'react';
import leftSideStyles from "../styles/leftSide.module.scss"

class LeftSide extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.getElementPosition = this.getElementPosition.bind(this));
        this.getElementPosition();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.getElementPosition);
    }
    getElementPosition = () => {
        const element = this.LeftSide;
        let rect = element.getBoundingClientRect();
        if ((rect.top > 0) && (rect.top < (window.innerHeight * 0.85))) {
            element.setAttribute("data-position", "in-viewport");
        }
    }


    render() {
        return (
            <section className={leftSideStyles.leftSide} ref={(element) => { this.LeftSide = element; }}>
                {this.props.children}
            </section>
        );
    }
}

export default LeftSide;