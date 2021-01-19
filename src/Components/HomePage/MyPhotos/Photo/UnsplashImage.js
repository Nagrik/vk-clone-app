import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin: 3px;
`;

export const UnsplashImage = ({url, key}) => {
    return <Img src={url} key={key} alt=''/>

}