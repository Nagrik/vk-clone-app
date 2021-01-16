import React, {Component, Fragment} from 'react'
import classes from './PageInfoContent.module.css'
import PageStats from "../../PageStats/PageStats";

export default class PageInfoContent extends Component {

    state = {
        showInfo: 'Show full information'
    }

    render() {
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
                    <p className={classes.FullInfo}>{this.state.showInfo}</p>
                </div>
                </div>
                    <PageStats/>
                </Fragment>

        )
    }
}