import { View, Text,Dimensions } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'
const {width,height} = Dimensions.get('window')
const CookieItemContainer = styled.TouchableOpacity`
    width: ${width/2 - 30}px;
    height: ${width/2 - 20}px;
    background-color: #fff;
    margin: 10px;
    border-radius: 10px;
    justify-content: flex-end;
    align-items: center;
`;
const ImageCookie= styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: cover;
    overflow: hidden;
    border-radius: 10px;
`;
const InfoCookie= styled.View`
    width: 100%;
    height: 50%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    bottom: 0;
    border-radius: 10px;
    padding: 10px;
`;
const NameCookie = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;
const DescriptionCookie = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: 500;

`;
const CookieItem = ({item}) => {
  return (
    <CookieItemContainer
        onpress={() => {
            console.log('press');
        }}
    >
      <ImageCookie
        source={{
            uri: item?.image
        }}
      />
      <InfoCookie>
        <NameCookie>{item?.name}</NameCookie>
        <DescriptionCookie>{item?.description}</DescriptionCookie>
      </InfoCookie>
    </CookieItemContainer>
  )
}

export default CookieItem