import React, {useState} from 'react'
import classes from './DefaultPost.module.css'
import { FaAngleDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function DefaultPost(){



    const [like,setLike] = useState(false)
    const [count, setCount] = useState(false)



    const toggleLike = () => setLike(prev => !prev)
    const toggleCount = () => setCount(prev => !prev)

   const onCLicked = () => {
        toggleLike()
        toggleCount()
    }




    return(
        <div className={classes.DefaultPost}>
            <div className={classes.Header}>
                <div className={classes.UserInfo}>
                    <div className={classes.UserProfile}>
                        <div className={classes.photo}/>
                        <a href='/' className={classes.userName}>
                            Roman Nahryshko
                        </a>
                    </div>
                        <div className={classes.arrowWrapper}>
                        <FaAngleDown className={classes.arrow}/>
                        </div>
                </div>
            </div>
            <div className={classes.PostTextWrapper}>
            <p className={classes.PostText}>
                Possession her thoroughly remarkably
                terminated man continuing. Removed greater to do ability.
                You shy shall while but wrote marry.
                Call why sake has sing pure.
                Gay six set polite nature worthy.
                So matter be me we wisdom should basket moment merely.
                Me burst ample wrong which would mr he could.
                Visit arise my point timed drawn no.
                Can friendly laughter goodness man him appetite carriage.
                Any widen see gay forth alone fruit bed.
            </p>
            </div>
            <div className={classes.UnderPostWrapper}>
                <div className={classes.UnderPost}>
                    <div className={classes.Heart}>
                    {
                        like === false
                    ? <FaHeart onClick={onCLicked} className={classes.Icon}/>
                    : <FaHeart onClick={onCLicked} className={classes.IconActive}/>
                        }
                        <div className={classes.Count}>{count + 1}</div>
                    </div>
                    <div className={classes.Heart}>
                        <FaComment className={classes.Icon}/>
                        <div className={classes.Count}>3</div>
                    </div>
                    <div className={classes.Heart}>
                        <FaShare className={classes.Icon}/>
                        <div className={classes.Count}>2</div>
                    </div>
                </div>
                <div className={classes.Eye}>
                    <FaEye/>
                    <div className={classes.EyeNumber}>33</div>
                </div>
            </div>
        </div>
    )
}