import React from 'react'
import Album1 from "./Album1";
import Album2 from "./Album2";
import classes from './Album.module.css'

export default function Album(){
    return(
        <div className={classes.Wrapper}>
            <div className={classes.AlbumTitle}>Photo Albums : 2</div>
            <Album1/>
            <Album2/>
        </div>
    )
}