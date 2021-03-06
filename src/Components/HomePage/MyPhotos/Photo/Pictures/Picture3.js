import React  from 'react'
import classes from '../Photo.module.css'
import {FaShare, FaHeart, FaTimes} from "react-icons/all";
import { Image, Modal } from 'semantic-ui-react'
import Velo from '../../../../../images/Velo.jpg'


function Picture3() {
    const [open, setOpen] = React.useState(false)


    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Image size='small' className={classes.Trigger}
                            src={Velo}/>}

        >
            <Modal.Content image className={classes.ModalWindow}>
                <Image size='big' className={classes.Modal}
                       src='https://www.gettyimages.com/gi-resources/images/frontdoor/editorial/Velo/GettyImages-Velo-1088643550.jpg'
                       wrapped/>
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



export default Picture3
