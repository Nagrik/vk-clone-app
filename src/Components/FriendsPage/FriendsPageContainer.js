import React, {useState, useEffect} from 'react'
import Loader from "../NewsPage/Loader";
import classes from './FriendsPage.module.css'
import {NavLink} from "react-router-dom";

export default function FriendsPageContainer(){

    const [items, setItems] = useState([1,2,3,4,5,6])
    const [loading, setLoading] = useState(false)

    useEffect (() =>{
        fetch("https://randomuser.me/api/?results=30&nat=US")
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
                        <NavLink  to={'/Profile/' + item.id.value}>
                        <img src={item.picture.large} alt={item.name.first} className={classes.Img}/>
                        </NavLink>
                        <div className={classes.Message}>
                        <h1 className={classes.Name}>{item.name.first} {item.name.last}</h1>
                        <p className={classes.Write}>Write message</p>
                        </div>
                    </div>
                )) }

            </div>
        )
    }
}
