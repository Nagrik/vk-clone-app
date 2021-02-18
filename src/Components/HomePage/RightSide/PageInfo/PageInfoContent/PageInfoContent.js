import React, {Fragment, useState} from 'react'
import classes from './PageInfoContent.module.css'
import PageStats from "../../PageStats/PageStats";
import ShowInfo from "../ShowInfo/ShowInfo";

export default function PageInfoContent(props) {

    const [show,setShow] = useState('Show full information')

    const handleHideInfoClick = () => {
        setShow('Show full information')
    }
    const handleShowInfoClick = () => {
        setShow('Hide full information')
    }
            if(!props.profile.profile.profile.match.params.userId) {
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
                                        <a href="/">
                                            <li>Oct 2</li>
                                        </a>
                                        <a href="/">
                                            <li>Actively searching</li>
                                        </a>
                                        <a href="/">
                                            <li>Kyiv</li>
                                        </a>
                                    </ul>
                                </div>
                                {show === 'Show full information'
                                    ? <p className={classes.FullInfo} onClick={handleShowInfoClick}>{show}</p>
                                    : <p className={classes.FullInfo} onClick={handleHideInfoClick}>{show}</p>
                                }
                                {show === 'Show full information'
                                    ? <p onClick={handleShowInfoClick}/>
                                    : <ShowInfo/>
                                }
                            </div>
                        </div>
                        {/*<ShowInfo/>*/}
                        <PageStats/>

                    </Fragment>

                )
            }else{
                return(
                <Fragment>
                    <div className={classes.Wrapper}>
                        <div className={classes.WrapperQuestion}>
                            <div className={classes.Question}>
                                <ul>
                                    <li>Age:</li>
                                    <li>Country:</li>
                                    <li>Current city:</li>
                                </ul>
                            </div>
                        </div>

                        <div className={classes.WrapperSense}>
                            <div className={classes.Sense}>
                                <ul>
                                    <a href="/">
                                        <li>
                                            {props.profile.profile.profile.profile.friends.profile.results[0].dob.age}
                                        </li>
                                    </a>
                                    <a href="/">
                                        <li>
                                            {props.profile.profile.profile.profile.friends.profile.results[0].location.country}
                                        </li>
                                    </a>
                                    <a href="/">
                                        <li>
                                            {props.profile.profile.profile.profile.friends.profile.results[0].location.city}

                                        </li>
                                    </a>
                                </ul>
                            </div>
                            {show === 'Show full information'
                                ? <p className={classes.FullInfo} onClick={handleShowInfoClick}>{show}</p>
                                : <p className={classes.FullInfo} onClick={handleHideInfoClick}>{show}</p>
                            }
                            {show === 'Show full information'
                                ? <p onClick={handleShowInfoClick}/>
                                : <ShowInfo/>
                            }
                        </div>
                    </div>
                    <PageStats/>
                </Fragment>
                )
            }
}
