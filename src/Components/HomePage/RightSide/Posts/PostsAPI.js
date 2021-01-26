import React, {createContext, useEffect, useState} from 'react'
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey  ='1919931b4e874852a0dc7c9ecafdfe37'


    useEffect(() => {
        axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        ).then(response => setData(response.data))
            .catch(error => console.log(error))
    },[])

    return <NewsContextProvider props={data}>{props.children}</NewsContextProvider>
}