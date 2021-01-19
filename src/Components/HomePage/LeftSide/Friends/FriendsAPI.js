import React, {Component} from 'react'
import classes from './Friends.module.css'

class FriendsAPI extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [1,2,3,4,5,6],
            loading:false
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=6&nat=US")
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    items:response.results,
                    loading:true
                })
            })
    }

    render() {

        let {items,loading} = this.state

        if(!loading){
            return (
                <div>Loading ...</div>
            )
        }

        else {

            return (
                <div className={classes.WrapperImage}>

                    { items.map((item,key) => (
                        <div className={classes.Pictures} >
                        <img src={item.picture.medium} alt={item.name.first} className={classes.Img}/>
                        <p>{item.name.first}</p>
                        </div>
                    )) }

                </div>
            )
        }
    }
}

export default FriendsAPI