import React, {Component, Fragment} from 'react'
import classes from './PageStats.module.css'

export default class PageStats extends Component {
    render() {
        return (
            <Fragment>
                <div className={classes.Wrapper}>
                <div className={classes.Friends}>
                    <div className={classes.Number}>256</div>
                    <div className={classes.Names}>friends</div>
                </div>
                <div className={classes.Followers}>
                    <div className={classes.Number}>3M</div>
                    <div className={classes.Names}>followers</div>
                </div>
                <div className={classes.Photos}>
                    <div className={classes.Number}>1200</div>
                    <div className={classes.Names}>photos</div>
                </div>
                <div className={classes.Tags}>
                    <div className={classes.Number}>25</div>
                    <div className={classes.Names}>tags</div>
                </div>
                <div className={classes.Videos}>
                    <div className={classes.Number}>170</div>
                    <div className={classes.Names}>videos</div>
                </div>
                <div className={classes.Audio}>
                    <div className={classes.Number}>3542</div>
                    <div className={classes.Names}>audio files</div>
                </div>
                </div>
             </Fragment>
        )
    }
}