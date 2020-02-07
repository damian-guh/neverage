import React from 'react';
import rightSideStyles from "../styles/rightSide.module.scss"


class RightSide extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.getElementPosition = this.getElementPosition.bind(this));
        this.getElementPosition();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.getElementPosition);
    }
    getElementPosition = () => {
        const element = this.RightSide;
        let rect = element.getBoundingClientRect();
        if ((rect.top > 0) && (rect.top < (window.innerHeight * 0.85))) {
            element.setAttribute("data-position", "in-viewport");
        }
    }


    render() {
        return (
            <section className={rightSideStyles.rightSide} ref={(element) => { this.RightSide = element; }}>
                {this.props.children}
            </section>
        );
    }
}

export default RightSide;