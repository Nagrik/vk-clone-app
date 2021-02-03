import React from 'react'
import classes from './Photo.module.css'
import Picture2 from "./Pictures/Picture2";
import Picture3 from "./Pictures/Picture3";
import Picture4 from "./Pictures/Picture4";
import Picture1 from "./Pictures/Picture1";


function Photo() {
        return (
            <div className={classes.Photos}>
                    <Picture1/>
                    <Picture2/>
                    <Picture3/>
                    <Picture4/>
            </div>
        )

}



export default Photo
