import React, {Component} from 'react'
import Photo from '../MyPhotos/Photo/Photo'
import classes from './MyPhotos.module.css'

export default class MyPhotos extends Component {
    render() {
        return (
            <div className={classes.MyPhotos}>
                <div className={classes.Title}>
                <span>My Photos</span>
                <a href="/">Show on the map</a>
                </div>
                <Photo/>
            </div>
        )
    }
}