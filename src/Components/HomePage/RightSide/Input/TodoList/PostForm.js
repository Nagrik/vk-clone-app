import React from 'react'
import classes from "../Input.module.css";
import {FaCog, FaMusic, FaRegImage, FaRegSmile, FaSort, FaVideo} from "react-icons/fa";
import {connect} from 'react-redux'
import {createPost} from "../../../../../redux/actionCreator";
import axios from "axios";
import {NavLink} from "react-router-dom";


class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            Post: []
        }
    }

    // renderPost(){
    //     return this.state.Post.map(post => {
    //         console.log(this.state.Post)
    //         return (
    //                 <li key={post.id}>
    //                         {post.name}
    //                         {/*{console.log(post.value)}*/}
    //                 </li>
    //             )
    //         })}
    //
    // async componentDidMount() {
    //     try {
    //         const response = await axios.get('https://vk-clone-3f378-default-rtdb.firebaseio.com/Post.json')
    //         const Post = []
    //         Object.keys(response.data).forEach((key, index,value) => {
    //             console.log(response.data)
    //             Post.push({
    //                 name:`Post #${index + 1}`,
    //                 value:response.data.title
    //             })
    //         })
    //         this.setState({
    //             Post
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    //
    // }

    submitHandler = async (event) => {
        event.preventDefault()
        // try {
        //     const response = await axios.post('https://vk-clone-3f378-default-rtdb.firebaseio.com/Post.json', this.props.post)
        //     console.log(response.data)
        // } catch (e) {
        //     console.log(e)
        // }

        const {title} = this.state

        if (!title.trim()) {
            return
        }
        const newPost = {
            title, id: Math.random(),
        }
        this.props.createPost(newPost)
        this.setState({title: ''})
    }


    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }


    render() {
        return (

            <div className={classes.Input}>
                <form onSubmit={this.submitHandler} className={classes.Form}>
                    <div className={classes.InputWrapper}>
                        <div className={classes.photo}/>
                        <input
                            type='text'
                            className={classes.InputActive}
                            id='title'
                            value={this.state.title}
                            name='title'
                            onChange={this.changeInputHandler}
                            placeholder="What's new?"
                            autoComplete="off"
                        />
                        {/*{this.renderPost()}*/}
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
        this.setState({text: e.target.value});
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


const mapStateToProps = (state) => {
    return {
        post: state.posts.posts
    }
}

const mapDispatchToProps = {
    createPost
}


export default connect(mapStateToProps, mapDispatchToProps)(PostForm)