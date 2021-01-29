import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 135px;
  height: 135px;
  object-fit: cover;
  margin: 3px;
`;

export const UnsplashImage = ({url}) => {
    return <Img src={url}  alt=''/>

}