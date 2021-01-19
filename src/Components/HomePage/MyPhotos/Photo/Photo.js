import React, {useState, useEffect} from 'react'
import {UnsplashImage} from "./UnsplashImage";
import classes from './Photo.module.css'


function Photo(){
        const axios = require('axios');
        const [images, setImages] = useState([]);


        useEffect(() => {
                const apiRoot = 'https://api.unsplash.com';
                axios
                    .get(`${apiRoot}/photos/random?client_id=BxQ9Wpmi5VqngMytxsxP0PCeqChBQV24dEGK5zTFzrs&count=4`)
                    .then(res => setImages([...images, ...res.data]))
        },[])
return(
    <div className={classes.Photos}>
            {images.map(image => (
                <UnsplashImage url={image.urls.thumb} key={image.id}  />
            ))}
    </div>
)

}

export default Photo
