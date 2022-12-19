import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
//?components
const HomeHeaderSectionContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 0.2px;
    padding-bottom: 10px;
    border-bottom-color: #E8F3D6;
`;
const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
//?types
const HomeHeaderSection = () => {
    return (
        <HomeHeaderSectionContainer>
            <AntDesign name="menu-fold" size={24} color="black" />
            <Title>Home</Title>
            <Feather name="search" size={24} color="black" />
        </HomeHeaderSectionContainer>
    )
}

export default HomeHeaderSection