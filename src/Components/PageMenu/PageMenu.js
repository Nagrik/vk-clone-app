import React, {Component} from 'react'
import classes from './PageMenu.module.css'
import {BrowserRouter, Link, Router} from 'react-router-dom'

export default class PageMenu extends Component {
    render() {
        return (

            <div className={classes.Container}>
                <div className={classes.PageMenu}>
                    <BrowserRouter>
                    <li className={classes.Items}>
                        <Link exact to="/Vk-clone" className={classes.Link}>
                            <span>My profile</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="/Vk-clone/news/news-feed" className={classes.Link}>
                            <span>News</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="" className={classes.Link}>
                            <span>Messages</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="/Vk-clone/friends" className={classes.Link}>
                            <span>Friends</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="" className={classes.Link}>
                            <span>Communities</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="" className={classes.Link}>
                            <span>Photos</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="" className={classes.Link}>
                            <span>Music</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="" className={classes.Link}>
                            <span>Videos</span>
                        </Link>
                    </li>
                    </BrowserRouter>
                </div>
            </div>
        )
            }
            }
