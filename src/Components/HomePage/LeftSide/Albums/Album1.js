import React from 'react'
import { Modal } from 'semantic-ui-react'
import classes from './Album.module.css'

export default function Album1(){
    const [open, setOpen] = React.useState(false)

    return(
        <div>
            <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                    <img className={classes.Image}
                    src='https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1155721112/960x0.jpg?fit=scale'
                    alt=''/>}
            >

                <Modal.Content image >
                    <div className={classes.PhotoWrapper}>
                        <img className={classes.Photo} src='https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1155721112/960x0.jpg?fit=scale' alt=''/>
                        <img className={classes.Photo} src='https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG' alt=''/>
                        <img className={classes.Photo} src='https://www.nhm.ac.uk/content/dam/nhmwww/discover/wpy-2020-winning-images/wpy-winning-image-full-width.jpg' alt=''/>
                        <img className={classes.Photo} src='https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=' alt=''/>
                        <img className={classes.Photo} src='https://www.gettyimages.com/gi-resources/images/frontdoor/editorial/Velo/GettyImages-Velo-1088643550.jpg' alt=''/>
                        <img className={classes.Photo} src='https://st2.depositphotos.com/1141099/6198/i/600/depositphotos_61983329-stock-photo-historic-charminar.jpg' alt=''/>
                    </div>

                    <Modal.Description>

                    </Modal.Description>
                </Modal.Content>
            </Modal>
            </div>
        </div>
    )
}