import React, {Component} from 'react'
import classes from './ShowInfo.module.css'

export default class ShowInfo extends Component {
    render() {
        return (
            <div className={classes.ShowInfo}>
                <div className={classes.MainInfo}>
                    <span className={classes.MainInfoText}>Main information</span>
                </div>
                <div className={classes.Block1}>
                    <div className={classes.MainQuestion}>
                        <ul>
                            <li>Hometown:</li>
                            <li>Languages:</li>
                        </ul>
                    </div>
                    <div className={classes.MainAnswers}>
                        <ul>
                            <a href="/"><li>Kyiv</li></a>
                            <a href="/"><li>English, Russian, Ukrainian</li></a>
                        </ul>
                    </div>
                </div>
                <div className={classes.MainInfo}>
                    <span className={classes.MainInfoText}>Main information</span>
                </div>
                <div className={classes.Block1}>
                    <div className={classes.MainQuestion}>
                        <ul>
                            <li>Favorite quotes:</li>
                            <li>Groups:</li>
                        </ul>
                    </div>
                    <div className={classes.MainAnswers}>
                        <ul>
                            <li>The secret of success is consistency of purpose.</li>
                            <a href="/"><li>Web, Frontend Dev, KNEU</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}