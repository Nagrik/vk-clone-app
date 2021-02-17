import React, {useEffect, useState} from 'react'
import classes from './Friends.module.css'
import {connect} from "react-redux";
import Loader from "../../../NewsPage/Loader";



function FriendsAPI(){

    const [items, setItems] = useState([1,2,3,4,5,6])
    const [loading, setLoading] = useState(false)

    useEffect (() =>{
        fetch("https://randomuser.me/api/?results=6&nat=US")
            .then((response) => response.json())
            .then((response) => {
                    setItems(response.results)
                    setLoading(true)
            })
    },[])
        if(!loading){
            return (
                <div><Loader/></div>
            )
        }
        else {
            return (
                <div className={classes.WrapperImage}>
                    { items.map((item, index) => (
                        <div className={classes.Pictures} key={index}>
                        <img src={item.picture.medium} alt={item.name.first} className={classes.Img}/>
                        <p>{item.name.first}</p>
                        </div>
                    )) }

                </div>
            )
        }
    }

   const mapStateToProps = (state) => {
       return{
    }
   }



export default connect(mapStateToProps)(FriendsAPI)