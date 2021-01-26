import React from 'react'
import classes from "../Input.module.css";
import {FaCog, FaMusic, FaRegImage, FaRegSmile, FaSort, FaSortAmountDown, FaVideo} from "react-icons/fa";
import {connect} from 'react-redux'
import {createPost} from "../../../../../redux/actionCreator";



class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            title:''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        if(!title.trim()){
            return
        }

        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({title:''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }


    render() {
        return (

             <div className={classes.Input} >
                 <form onSubmit={this.submitHandler} className={classes.Form}>
                   <div className={classes.InputWrapper} >
                       <div className={classes.photo}/>
                   <textarea
                       type='text'
                       className={classes.InputActive}
                       id='title'
                       value={this.state.title}
                       name='title'
                       onChange={this.changeInputHandler}
                       placeholder="What's new?"
                     />
                         <div className={classes.IconWrapper}>
                             <div className={classes.IconActive}>
                                 <FaRegSmile/>
                             </div>
                         </div>
                     </div>
                     <div className={classes.UnderInput}>
                         <div className={classes.UnderIcon}>
                             <FaRegImage className={classes.Icon}/>
                             <FaMusic className={classes.Icon}/>
                             <FaVideo className={classes.Icon}/>
                             <FaSort className={classes.Icon}/>
                         </div>
                         <div className={classes.Cog}>
                             <div>
                                 <FaCog className={classes.Icon}/>
                             </div>
                             <button
                                 className={classes.Button}>
                                 Send
                             </button>
                         </div>
                     </div>
                 </form>
             </div>

    );

    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

const mapDispatchToProps = {
    createPost
}



export default connect(null,mapDispatchToProps)(PostForm)