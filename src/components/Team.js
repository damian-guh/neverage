import React from "react"
import teamStyles from "../styles/team.module.scss"
import guh from "../images/guh.png"
import skowron from "../images/skowron.png"
import maciek from "../images/maciek.png"
import karol from "../images/karol.png"
import LeftSide from "./LeftSide"
import leftSideItemsStyles from "../styles/leftSideItems.module.scss"
import RightSide from "../components/RightSide"
import rightSideItemsStyles from "../styles/rightSideItems.module.scss"


class Team extends React.Component {


    render() {
        return (
            <div className={teamStyles.team}>
                <LeftSide>
                    <img src={skowron} className={leftSideItemsStyles.person} alt="" />
                    <div className={leftSideItemsStyles.personInfo}>
                        <h1 className={leftSideItemsStyles.name}>Patryk Skowron</h1>
                        <p className={leftSideItemsStyles.desc}>Muzyka to styl życia, rap to kierunek. Never Average</p>
                    </div>
                </LeftSide>
                <RightSide>
                    <img src={karol} className={rightSideItemsStyles.person} alt="" />
                    <div className={rightSideItemsStyles.personInfo}>
                        <h1 className={rightSideItemsStyles.name}>Karol Stawecki</h1>
                        <p className={rightSideItemsStyles.desc}>Kamera to jego drugie imię. Urodzony, by nagrywać.</p>
                    </div>
                </RightSide>
                <LeftSide>
                    <img src={guh} className={leftSideItemsStyles.person} alt="" />
                    <div className={leftSideItemsStyles.personInfo}>
                        <h1 className={leftSideItemsStyles.name}>Damian Głuch</h1>
                        <p className={leftSideItemsStyles.desc}>Jasna "strona" mocy. Front-end Developer</p>
                    </div>
                </LeftSide>
                <RightSide>
                    <img src={maciek} className={rightSideItemsStyles.person} alt="" />
                    <div className={rightSideItemsStyles.personInfo}>
                        <h1 className={rightSideItemsStyles.name}>Maciek Słowik</h1>
                        <p className={rightSideItemsStyles.desc}>Zajmuje się prowadzeniem naszych social mediów.</p>
                    </div>
                </RightSide>

            </div >

        )
    }
}
export default Team