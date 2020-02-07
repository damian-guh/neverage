import React from "react"
import youtubeStyles from "../styles/youtube.module.scss"
class Youtube extends React.Component {
    state = {
        theNewest: "",
        newer: "",
        theNewestImg: "",
        newerImg: ""
    }
    componentDidMount() {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC-gBZpERnkw6XAataYZdHFQ")
            .then(res => res.json())
            .then(data => this.setState({
                theNewest: data.items[0].link,
                newer: data.items[1].link,
                theNewestImg: data.items[0].thumbnail,
                newerImg: data.items[1].thumbnail,
            }))

    }


    render() {
        return (
            <div className={youtubeStyles.youtube}>
                <h1 className={youtubeStyles.title}>Najnowsze</h1>
                <a href={this.state.theNewest} target="_blank" rel="noopener noreferrer"><img className={youtubeStyles.clips} src={this.state.theNewestImg} alt="" /></a>
                <a href={this.state.newer} target="_blank" rel="noopener noreferrer"><img className={youtubeStyles.clips} src={this.state.newerImg} alt="" /></a>
            </div>

        )
    }
}
export default Youtube