import React from 'react'
import classes from './HomeAvatar.module.css'
import { FaRegChartBar } from 'react-icons/fa';
// import Loader from "../../../NewsPage/Loader";

 const HomeAvatar = (props) =>{

     if(props.profile.profile.profile.match.params.userId === undefined){
         // return <Loader/>
        return (
            <div className={classes.HomeAvatar}>
                <div className={classes.Photo}/>
                <div className={classes.Wrapper}>
                    <button type='button' className={classes.Button}>
                        Edit
                    </button>
                    <FaRegChartBar className={classes.Stats}/>
                </div>
            </div>
        )
     }
    else {
         return (
             <div className={classes.HomeAvatar}>
                 <img className={classes.FriendsPhoto} alt='123'
                     src={props.profile.profile.profile.profile.friends.profile.results[0].picture.large}/>
                 <div className={classes.Wrapper}>
                     <button type='button' className={classes.Button}>
                         Edit
                     </button>
                     <FaRegChartBar className={classes.Stats}/>
                 </div>
             </div>
         )
     }
}

export default HomeAvatar