import React from 'react'
import classes from './Drop.module.css'
import Dropdowns from "./DropDown";
import DropDownMonth from "./DropDownMonth";
import DropDownYear from "./DropDownYear";
import Checkboxs from "./radioButtons";

export default function Registration() {
    const registerHandler = () => {

    }

   const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className={classes.Registration}>
            <div className={classes.Wrapper}>
                <div className={classes.Title}>
                    <div className={classes.MainTitle}>Firs time here?</div>
                    <div className={classes.Subtitle}>Sing up for VK</div>
                </div>
                <form
                    className={classes.Form}
                    onSubmit={submitHandler}
                >
                    <input
                        className={classes.Input}
                        placeholder='Your first name'
                    />
                    <input
                        className={classes.Input}
                        placeholder='Your last name'
                    />
                    <p>Select your birthday:</p>
                    <div className={classes.DropDowns}>
                        <Dropdowns/>
                        <DropDownMonth/>
                        <DropDownYear/>
                    </div>
                    <Checkboxs/>
                    <button
                        className={classes.Button}
                        onClick={registerHandler}
                    >
                        Registration
                    </button>
                </form>
            </div>
        </div>
    )
}