import React, {useState} from 'react'
import classes from './DefaultPost.module.css'
import { FaAngleDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import CommentsExample from "../../Comments/CommentsExample";

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
        <div>
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
                When I was 5 years old,
                my mother always told me
                that the most important
                thing in life is to be happy.
                When I went to school, I was
                asked what I want to become
                when I grow up. I wrote "happy".
                They told me - "you did not understand the task",
                and I answered - "you did not understand life."
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
                        <div className={classes.Count}>2</div>
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
            <CommentsExample/>
        </div>
        <div className={classes.Closed}>
            The user has closed comments under this post <FaLock/>
        </div>
        </div>
)
}