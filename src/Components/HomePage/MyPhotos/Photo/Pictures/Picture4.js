import React, {useState, useEffect} from 'react'
import classes from '../Photo.module.css'
import {FaShare, FaHeart, FaTimes} from "react-icons/all";
import { Button, Header, Image, Modal } from 'semantic-ui-react'


function Picture2() {
    const [open, setOpen] = React.useState(false)


    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Image size='small' className={classes.Trigger} src='https://api.contentstack.io/v2/assets/575e4d1c0342dfd738264a1f/download?uid=bltada7771f270d08f6'/>}

        >
            <Modal.Content image className={classes.ModalWindow}>
                <Image size='big' className={classes.Modal} src='https://api.contentstack.io/v2/assets/575e4d1c0342dfd738264a1f/download?uid=bltada7771f270d08f6' wrapped />
                <Modal.Description className={classes.description}>
                    <div className={classes.Wrapper}>
                        <div className={classes.HeaderWrapper}>
                            <div className={classes.Photo}/>
                            <div className={classes.Info}>
                                <div className={classes.Name}>Roman Nahryshko</div>
                                <div className={classes.Date}>31 Oct 2021</div>
                                <FaTimes onClick={() => setOpen(false)} className={classes.Times}/>
                            </div>
                        </div>
                    </div>
                    <FaHeart className={classes.Icon}/>
                    <FaShare className={classes.Icon}/>
                    <div className={classes.InputWrapper}>
                        <div className={classes.PhotoInput}/>
                        <input
                            className={classes.Input}
                            placeholder='Write a comment...'
                        />
                    </div>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )

}



export default Picture2
