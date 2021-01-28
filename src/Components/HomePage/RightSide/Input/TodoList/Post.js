import React, {useState} from 'react'
import classes from "../../UserPosts/DefaultPost/DefaultPost.module.css";
import {FaAngleDown, FaComment, FaEye, FaHeart, FaShare} from "react-icons/fa";

export default ({post}) => {

    const [like,setLike] = useState(false)
    const [count, setCount] = useState(false)



    const toggleLike = () => setLike(prev => !prev)
    const toggleCount = () => setCount(prev => !prev)

    const onCLicked = () => {
        toggleLike()
        toggleCount()
    }
    return(
    //     <div>

    //     </div>
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

                    <p>{post.title}</p>

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
                        <div className={classes.Count}>0</div>
                    </div>
                    <div className={classes.Heart}>
                        <FaShare className={classes.Icon}/>
                        <div className={classes.Count}>0</div>
                    </div>
                </div>
                <div className={classes.Eye}>
                    <FaEye/>
                    <div className={classes.EyeNumber}>1</div>
                </div>
            </div>
        </div>
    )
}