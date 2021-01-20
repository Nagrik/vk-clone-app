import React, {Component, Fragment} from 'react'
import classes from './PageInfoContent.module.css'
import PageStats from "../../PageStats/PageStats";
import ShowInfo from "../ShowInfo/ShowInfo";

export default class PageInfoContent extends Component {

    state = {
        showInfo: 'Show full information',
    }

    handleHideInfoClick = () => {
        this.setState({
            showInfo:'Show full information'
        })
    }
    handleShowInfoClick = () => {
        this.setState({
            showInfo:'Hide full information'
        })
    }

    render() {
        const showInfo = this.state.showInfo
        return (

                <Fragment>
            <div className={classes.Wrapper}>
                <div className={classes.WrapperQuestion}>
                    <div className={classes.Question}>
                        <ul>
                            <li>Birthday:</li>
                            <li>Relationship:</li>
                            <li>Current city:</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.WrapperSense}>
                    <div className={classes.Sense}>
                        <ul>
                            <a href="/"><li>Oct 2</li></a>
                            <a href="/"><li>Actively searching</li></a>
                            <a href="/"><li>Kyiv</li></a>
                        </ul>
                    </div>
                    {showInfo === 'Show full information'
                       ? <p className={classes.FullInfo} onClick={this.handleShowInfoClick}>{this.state.showInfo}</p>
                        : <p className={classes.FullInfo} onClick={this.handleHideInfoClick}>{this.state.showInfo}</p>
                    }

                    { showInfo === 'Show full information'
                        ? <p  onClick={this.handleShowInfoClick}/>
                        :  <ShowInfo/>
                    }
                </div>
                </div>
                    {/*<ShowInfo/>*/}
                    <PageStats/>

                </Fragment>

        )
    }
}