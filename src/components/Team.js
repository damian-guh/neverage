import React from "react"
import teamStyles from "../styles/team.module.scss"
import person from "../images/circle-cropped.png"
import LeftSide from "./LeftSide"
import leftSideItemsStyles from "../styles/leftSideItems.module.scss"
import RightSide from "../components/RightSide"
import rightSideItemsStyles from "../styles/rightSideItems.module.scss"

class Team extends React.Component {

    render() {
        return (
            <div className={teamStyles.team}>
                <LeftSide>
                    <img src={person} className={leftSideItemsStyles.person} alt="" />
                    <div className={leftSideItemsStyles.personInfo}>
                        <h1 className={leftSideItemsStyles.name}>Name Surname</h1>
                        <p className={leftSideItemsStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </LeftSide>
                <RightSide>
                    <img src={person} className={rightSideItemsStyles.person} alt="" />
                    <div className={rightSideItemsStyles.personInfo}>
                        <h1 className={rightSideItemsStyles.name}>Name Surname</h1>
                        <p className={rightSideItemsStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </RightSide>
                <LeftSide>
                    <img src={person} className={leftSideItemsStyles.person} alt="" />
                    <div className={leftSideItemsStyles.personInfo}>
                        <h1 className={leftSideItemsStyles.name}>Name Surname</h1>
                        <p className={leftSideItemsStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </LeftSide>
                <RightSide>
                    <img src={person} className={rightSideItemsStyles.person} alt="" />
                    <div className={rightSideItemsStyles.personInfo}>
                        <h1 className={rightSideItemsStyles.name}>Name Surname</h1>
                        <p className={rightSideItemsStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </RightSide>
                <LeftSide>
                    <img src={person} className={leftSideItemsStyles.person} alt="" />
                    <div className={leftSideItemsStyles.personInfo}>
                        <h1 className={leftSideItemsStyles.name}>Name Surname</h1>
                        <p className={leftSideItemsStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </LeftSide>
            </div >

        )
    }
}
export default Team