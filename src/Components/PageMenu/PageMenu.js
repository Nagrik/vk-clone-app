import React, {Component} from 'react'
import classes from './PageMenu.module.css'
import {Link, NavLink, Route} from 'react-router-dom'

export default class PageMenu extends Component {
    render() {
        return (

            <div className={classes.Container}>
                <div className={classes.PageMenu}>
                    <Route>
                    <li className={classes.Items}>
                        <NavLink exact to="/" className={classes.Link}>
                            <span>My profile</span>
                        </NavLink>
                    </li>
                        <li className={classes.Items}>
                        <NavLink to="/News" className={classes.Link}>
                            <span>News</span>
                        </NavLink>
                    </li>
                        <li className={classes.Items}>
                        <Link to="/Vk-clone/message" className={classes.Link}>
                            <span>Messages</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="/Vk-clone/friends" className={classes.Link}>
                            <span>Friends</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="/Vk-clone/communities" className={classes.Link}>
                            <span>Communities</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="/Vk-clone/photos" className={classes.Link}>
                            <span>Photos</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="/Vk-clone/music" className={classes.Link}>
                            <span>Music</span>
                        </Link>
                    </li>
                        <li className={classes.Items}>
                        <Link to="/Vk-clone/videos" className={classes.Link}>
                            <span>Videos</span>
                        </Link>
                    </li>
                    </Route>
                </div>
            </div>
        )
            }
            }
